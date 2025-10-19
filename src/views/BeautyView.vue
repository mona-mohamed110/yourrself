<template>
  <section class="min-h-screen bg-pink-50 flex flex-col items-center pt-32 pb-16 px-4 sm:px-6 md:px-12">
    <!-- Title -->
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink-600 mb-4 text-center">
      Beauty & Glow
    </h1>
    <p class="text-gray-700 text-center mb-8 max-w-2xl text-sm sm:text-base md:text-lg">
      Discover your unique glow — inside and out 🌸
    </p>

    <!-- Tip of the Day -->
    <div class="bg-white shadow-md rounded-2xl p-6 mb-10 w-full max-w-md text-center">
      <h2 class="text-2xl font-semibold text-pink-500 mb-2">💡 Tip of the Day</h2>
      <p class="text-gray-700 text-sm sm:text-base">{{ dailyTip }}</p>
    </div>

    <!-- Skin Type Form -->
    <div class="bg-white shadow-md rounded-2xl p-8 mb-10 w-full max-w-md">
      <h2 class="text-lg sm:text-xl font-semibold text-pink-500 mb-4 text-center">
        Choose your skin type 👇
      </h2>

      <select
        v-model="selectedSkinType"
        class="w-full border border-pink-200 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
      >
        <option disabled value="">Select...</option>
        <option value="dry">Dry</option>
        <option value="oily">Oily</option>
        <option value="combination">Combination</option>
        <option value="sensitive">Sensitive</option>
      </select>

      <button
        @click="showTips"
        class="w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition text-sm sm:text-base"
      >
        Show My Tips
      </button>

      <!-- Personalized Tips -->
      <div v-if="personalTips.length" class="mt-6 bg-pink-50 p-4 rounded-lg">
        <h3 class="text-base sm:text-lg font-semibold text-pink-600 mb-2 text-center">
          Your Skincare Tips 💖
        </h3>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed text-sm sm:text-base">
          <li v-for="(tip, index) in personalTips" :key="index">{{ tip }}</li>
        </ul>
      </div>
    </div>

    <!-- Articles -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full px-2">
      <div
        v-for="article in articles"
        :key="article.title"
        class="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
      >
        <h4 class="text-pink-600 font-semibold mb-2 text-base sm:text-lg">{{ article.title }}</h4>
        <p class="text-gray-600 text-sm mb-3">{{ article.desc }}</p>
        <a
          :href="article.link"
          target="_blank"
          class="text-pink-500 font-medium hover:underline text-sm"
          >Read More →</a
        >
      </div>
    </div>

    <!-- Back Button -->
    <button
      @click="$router.push('/')"
      class="mt-12 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition text-sm sm:text-base"
    >
      Back to Home
    </button>
  </section>
</template>

<script setup>
import { ref } from "vue"

const tips = [
  "Always wear sunscreen — even on cloudy days ☀️",
  "Clean your makeup brushes regularly 🧼",
  "Stay hydrated — your skin loves water 💧",
  "Less sugar = clearer skin 🍬",
  "A good night’s sleep beats any expensive cream 😴",
]

const dailyTip = tips[Math.floor(Math.random() * tips.length)]

const selectedSkinType = ref("")
const personalTips = ref([])

const skinTips = {
  dry: [
    "Use a rich moisturizer right after washing your face 🧴",
    "Avoid harsh cleansers with alcohol",
    "Drink enough water to hydrate from within 💧",
  ],
  oily: [
    "Use a gentle cleanser twice a day 🫧",
    "Avoid heavy oily products",
    "Light moisturizers are your best friends 💚",
  ],
  combination: [
    "Moisturize only the dry areas 🧴",
    "Use a balancing mask once a week",
    "Lightweight products help keep your skin balanced ✨",
  ],
  sensitive: [
    "Stay away from fragrances in skincare 🚫",
    "Patch-test new products first",
    "Use natural rose water to calm irritation 🌸",
  ],
}

const showTips = () => {
  if (selectedSkinType.value) {
    personalTips.value = skinTips[selectedSkinType.value]
  } else {
    personalTips.value = []
  }
}

const articles = [
  {
    title: "5 Steps to a Glowing Skin",
    desc: "Simple daily habits for radiant, healthy skin.",
    link: "#",
  },
  {
    title: "How to Choose the Right Moisturizer",
    desc: "Find the perfect match for your skin type.",
    link: "#",
  },
  {
    title: "Nighttime Routine Ideas",
    desc: "End your day with a relaxing skincare ritual 😴",
    link: "#",
  },
]
</script>
