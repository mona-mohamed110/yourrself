<template>
  <section class="min-h-screen bg-[#fffaf8] p-6">
    <div class="max-w-4xl mx-auto space-y-10">

      <h1 class="text-4xl font-bold text-center text-[#644040]">
        Mindset & Confidence
      </h1>

      <!-- Step Quiz -->
      <div class="bg-white p-6 rounded-2xl shadow-md space-y-6">
        <h2 class="text-2xl font-semibold text-[#644040]">Daily Self-Reflection</h2>

        <div v-if="currentStep < questions.length" class="space-y-2">
          <label class="font-semibold">{{ questions[currentStep] }}</label>
          <textarea
            v-model="answers[currentStep]"
            placeholder="Write freely..."
            class="w-full border border-gray-300 rounded-lg p-3 resize-none h-24"
          ></textarea>
          <button
            @click="nextStep"
            class="bg-[#644040] text-white px-6 py-2 rounded-lg hover:bg-[#7a5050]"
          >
            Next
          </button>
        </div>

        <div v-else>
          <button
            @click="analyzeAnswers"
            class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Finish & Analyze
          </button>
        </div>

        <div v-if="analysis" class="mt-4 p-4 bg-[#fff0f0] rounded-lg space-y-2">
          <h3 class="text-xl font-semibold">Analysis:</h3>
          <p><strong>Mood:</strong> {{ analysis.mood }}</p>
          <p><strong>Strengths:</strong> {{ analysis.strengths }}</p>
          <p><strong>Needs Support:</strong> {{ analysis.weaknesses }}</p>
          <p><strong>Suggested Challenges:</strong> {{ analysis.challenges.join(' | ') }}</p>
        </div>
      </div>

      <!-- Mood History Dashboard -->
      <div class="bg-white p-6 rounded-2xl shadow-md space-y-4">
        <h2 class="text-2xl font-semibold text-[#644040]">Mood History</h2>
        <ul class="list-disc list-inside max-h-64 overflow-y-auto">
          <li v-for="(entry, index) in moodHistory" :key="index">
            <strong>{{ entry.date }}:</strong> {{ entry.summary }}
          </li>
        </ul>
        <button
          @click="clearHistory"
          class="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
        >
          Clear History
        </button>
      </div>

      <!-- Memory Game -->
      <div class="bg-white p-6 rounded-2xl shadow-md space-y-4">
        <h2 class="text-2xl font-semibold text-[#644040]">Memory Game</h2>
        <p>اختبر تركيزك وسرعة ملاحظتك:</p>

        <div class="grid grid-cols-4 gap-4 mt-4">
          <div 
            v-for="(card, index) in cards" 
            :key="index"
            @click="flipCard(index)"
            class="h-20 flex items-center justify-center rounded-lg cursor-pointer"
            :style="{
              backgroundColor: card.flipped || card.matched ? card.color : '#ccc'
            }"
          ></div>
        </div>

        <div v-if="gameOver" class="mt-4 p-4 bg-[#fff0f0] rounded-lg text-center">
          <h3 class="text-xl font-semibold">Game Over!</h3>
          <p>عدد المحاولات: {{ attempts }}</p>
          <p>تحليل التركيز: {{ analysisText }}</p>
          <button @click="resetGame" class="mt-2 bg-[#644040] text-white px-6 py-2 rounded-lg hover:bg-[#7a5050]">
            Replay
          </button>
        </div>
      </div>

      <!-- Back to Home -->
      <div class="text-center mt-6">
        <button
          @click="goHome"
          class="bg-[#644040] text-white px-6 py-2 rounded-lg hover:bg-[#7a5050]"
        >
          Back to Home
        </button>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // Step Quiz
      questions: [
        "إزاي حاسس النهاردة؟",
        "إيه أكتر حاجة مضايقاك أو فرحتك؟",
        "هل في حاجة حابب تغيّرها في يومك؟",
        "إيه شعورك تجاه نفسك النهاردة؟"
      ],
      answers: ['', '', '', ''],
      currentStep: 0,
      analysis: null,
      moodHistory: [],

      // Memory Game
      cards: [],
      firstCardIndex: null,
      attempts: 0,
      gameOver: false,
      analysisText: '',

      colors: [
        '#FF5733','#33FF57','#3357FF','#F1C40F',
        '#8E44AD','#E67E22','#2ECC71','#1ABC9C'
      ]
    };
  },
  mounted() {
    this.initGame()
  },
  methods: {
    // Step Quiz Methods
    nextStep() {
      if (!this.answers[this.currentStep].trim()) return;
      this.currentStep++;
    },
    analyzeAnswers() {
      const positiveWords = ['سعيد', 'فرح', 'ممتن', 'بخير', 'حب', 'نجاح', 'راحة'];
      const negativeWords = ['زعلان', 'حزين', 'متوتر', 'تعبان', 'قلق', 'ضغط', 'خوف'];

      let moodScore = 0;
      let strengthsArr = [];
      let weaknessesArr = [];
      let challengesArr = [];

      this.answers.forEach(ans => {
        positiveWords.forEach(word => {
          if (ans.includes(word)) {
            moodScore++;
            if (!strengthsArr.includes(word)) strengthsArr.push(word);
          }
        });
        negativeWords.forEach(word => {
          if (ans.includes(word)) {
            moodScore--;
            if (!weaknessesArr.includes(word)) weaknessesArr.push(word);
          }
        });

        if (ans.match(/تعبان|متوتر|قلق|ضغط|خوف/)) {
          challengesArr.push("خد 5 دقايق تتأمل أو مارس تنفس عميق");
        }
        if (ans.match(/سعيد|فرح|نجاح|ممتن|حب/)) {
          challengesArr.push("شارك فرحتك أو سجل حاجة ممتنة ليك اليوم");
        }
      });

      let moodText = '';
      if (moodScore > 0) moodText = "إيجابي / كويس";
      else if (moodScore < 0) moodText = "سلبي / محتاج دعم";
      else moodText = "محايد";

      this.analysis = {
        mood: moodText,
        strengths: strengthsArr.length ? strengthsArr.join(', ') : 'لا يوجد',
        weaknesses: weaknessesArr.length ? weaknessesArr.join(', ') : 'لا يوجد',
        challenges: challengesArr.length ? [...new Set(challengesArr)] : ["حاول ركّز على حاجات إيجابية اليوم"]
      };

      const today = new Date().toLocaleDateString();
      this.moodHistory.push({ date: today, summary: this.answers.join(' | ') });

      this.answers = ['', '', '', ''];
      this.currentStep = 0;
    },
    clearHistory() {
      this.moodHistory = [];
      this.analysis = null;
    },

    // Memory Game Methods
    initGame() {
      let cardColors = [...this.colors, ...this.colors]; // كل لون مرتين
      cardColors = cardColors.sort(() => Math.random() - 0.5);
      this.cards = cardColors.map(color => ({
        color,
        flipped: false,
        matched: false
      }));
      this.firstCardIndex = null;
      this.attempts = 0;
      this.gameOver = false;
      this.analysisText = '';
    },
    flipCard(index) {
      const card = this.cards[index];
      if(card.flipped || card.matched) return;

      card.flipped = true;

      if(this.firstCardIndex === null) {
        this.firstCardIndex = index;
      } else {
        this.attempts++;
        const firstCard = this.cards[this.firstCardIndex];
        if(firstCard.color === card.color) {
          firstCard.matched = true;
          card.matched = true;
        } else {
          setTimeout(() => {
            firstCard.flipped = false;
            card.flipped = false;
          }, 800);
        }
        this.firstCardIndex = null;
      }

      if(this.cards.every(c => c.matched)) {
        this.gameOver = true;
        this.setAnalysis();
      }
    },
    setAnalysis() {
      if(this.attempts <= 12) this.analysisText = "تركيز عالي ونشاط اليوم ممتاز";
      else if(this.attempts <= 20) this.analysisText = "تركيز متوسط، حاول تاخد شوية راحة";
      else this.analysisText = "تركيز منخفض، ممكن تكون متوتر أو محتاج طاقة";
    },
    resetGame() {
      this.initGame();
    },

    // Back to Home
    goHome() {
      this.$router.push({ name: 'home' });
      // لو مش عندك routing
      // window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
button:focus {
  outline: none;
}
</style>
