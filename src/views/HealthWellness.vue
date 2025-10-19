<template>
  <section class="min-h-screen bg-green-50 py-20 px-6 flex flex-col items-center">
    <!-- Title -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-extrabold text-green-600 mb-2">Health & Wellness</h1>
      <p class="text-gray-700 max-w-2xl mx-auto">
        Take care of your body — it's the only place you have to live 🌿
      </p>
    </div>

    <!-- Top Grid (3 cards) -->
    <div class="grid md:grid-cols-3 gap-10 max-w-6xl w-full mb-16">
      <!-- Daily Motivation -->
      <div class="bg-white shadow-md rounded-2xl p-6 text-center">
        <h2 class="text-2xl font-semibold text-green-500 mb-2">💬 Daily Motivation</h2>
        <p class="text-gray-700 italic">{{ dailyQuote }}</p>
      </div>

      <!-- Recipe -->
      <div class="bg-white shadow-md rounded-2xl p-8 text-center">
        <h2 class="text-xl font-semibold text-green-500 mb-4">🥗 Recipe of the Day</h2>
        <p class="text-gray-700 mb-2 font-medium">{{ recipe.title }}</p>
        <p class="text-gray-600 mb-3">{{ recipe.desc }}</p>
        <a
          :href="recipe.link"
          target="_blank"
          class="text-green-500 font-medium hover:underline text-sm"
        >
          Read More →
        </a>
      </div>

      <!-- Simple Workout -->
      <div class="bg-white shadow-md rounded-2xl p-8 text-center">
        <h2 class="text-xl font-semibold text-green-500 mb-4">Quick Workout 💪</h2>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed text-left inline-block">
          <li>10 squats</li>
          <li>15 jumping jacks</li>
          <li>30 seconds plank</li>
        </ul>
        <p class="mt-3 text-sm text-gray-500 text-center">
          Do this twice a day for an energy boost!
        </p>
      </div>
    </div>

    <!-- Bottom Grid (BMI + Tracker) -->
    <div class="grid md:grid-cols-2 gap-10 max-w-6xl w-full">
      <!-- BMI Calculator -->
      <div class="bg-white shadow-lg rounded-3xl p-10 text-center">
        <h2 class="text-2xl font-bold text-green-500 mb-6">BMI Calculator ⚖️</h2>
        <input
          v-model.number="weight"
          type="number"
          placeholder="Weight (kg)"
          class="border border-green-200 rounded-md p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          v-model.number="height"
          type="number"
          placeholder="Height (cm)"
          class="border border-green-200 rounded-md p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          @click="calculateBMI"
          class="w-full bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition"
        >
          Calculate
        </button>
        <p v-if="bmi" class="mt-6 text-gray-700 font-medium">
          Your BMI: <span class="text-green-600">{{ bmi }}</span> — {{ bmiMessage }}
        </p>
      </div>

      <!-- Meal & Water Tracker -->
      <div class="bg-white shadow-lg rounded-3xl p-10 text-center">
        <h2 class="text-2xl font-bold text-green-500 mb-6">Meal & Water Tracker 💧</h2>

        <!-- Water Tracker -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-green-600 mb-3">Water Intake</h3>
          <div class="flex justify-center items-center gap-4 mb-4">
            <button
              @click="addWater"
              class="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            >
              + Add Cup
            </button>
            <button
              @click="resetWater"
              class="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300"
            >
              Reset
            </button>
          </div>
          <p class="text-gray-700">You drank {{ waterCups }} / 8 cups</p>
          <div class="w-full bg-green-100 h-3 rounded-full mt-3">
            <div
              class="h-3 bg-green-500 rounded-full transition-all duration-300"
              :style="{ width: (waterCups / 8) * 100 + '%' }"
            ></div>
          </div>
        </div>

        <!-- Meal Tracker -->
        <div>
          <h3 class="text-lg font-semibold text-green-600 mb-3">Meals Completed</h3>
          <div class="flex flex-col items-center space-y-3">
            <label class="flex items-center gap-2">
              <input type="checkbox" v-model="meals.breakfast" class="w-4 h-4 text-green-500" />
              <span>Breakfast</span>
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" v-model="meals.lunch" class="w-4 h-4 text-green-500" />
              <span>Lunch</span>
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" v-model="meals.dinner" class="w-4 h-4 text-green-500" />
              <span>Dinner</span>
            </label>
          </div>
          <p class="mt-4 text-gray-700">
            Completed:
            <span class="text-green-600 font-semibold">{{ completedMeals }}/3</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Back Button -->
    <button
      @click="$router.push('/')"
      class="mt-16 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
    >
      Back to Home
    </button>
  </section>
</template>

<script setup>
import { ref, computed } from "vue"

const quotes = [
  "Small progress is still progress 🌱",
  "Move your body, clear your mind 💭",
  "Discipline is stronger than motivation 💪",
  "Rest is productive too 💤",
  "Healthy mind, healthy body 🧘‍♀️",
]
const dailyQuote = quotes[Math.floor(Math.random() * quotes.length)]

const recipe = {
  title: "Avocado Toast with Egg",
  desc: "Mash avocado on whole grain bread, top with a poached egg and sprinkle of chili flakes 🥑🍳",
  link: "#",
}

const weight = ref(null)
const height = ref(null)
const bmi = ref(null)
const bmiMessage = ref("")

const calculateBMI = () => {
  if (weight.value && height.value) {
    const heightMeters = height.value / 100
    const result = (weight.value / (heightMeters * heightMeters)).toFixed(1)
    bmi.value = result
    if (result < 18.5) bmiMessage.value = "Underweight — eat well and stay strong!"
    else if (result < 24.9) bmiMessage.value = "Normal — keep it up!"
    else if (result < 29.9) bmiMessage.value = "Overweight — time to move a bit more!"
    else bmiMessage.value = "Obese — focus on balanced meals and daily walks"
  } else {
    bmi.value = null
    bmiMessage.value = "Please enter your weight and height"
  }
}

// Water Tracker
const waterCups = ref(0)
const addWater = () => {
  if (waterCups.value < 8) waterCups.value++
}
const resetWater = () => (waterCups.value = 0)

// Meal Tracker
const meals = ref({
  breakfast: false,
  lunch: false,
  dinner: false,
})
const completedMeals = computed(() => {
  return Object.values(meals.value).filter((v) => v).length
})
</script>

<style scoped>
section {
  padding-top: 80px;
}
@media (max-width: 768px) {
  section {
    padding-top: 60px;
  }
}
</style>
