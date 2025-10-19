<template>
  <section class="min-h-screen bg-[#fffaf8] py-20 px-8 flex flex-col items-center font-[Poppins]">
    <!-- Title -->
    <div class="text-center mb-20">
      <h1 class="text-6xl font-extrabold text-[#c48a78] mb-3 tracking-wide">Fashion & Style</h1>
      <p class="text-gray-600 max-w-2xl mx-auto text-xl">
        Discover your perfect outfit for every mood & moment 👗✨
      </p>
    </div>

    <!-- Fashion Quiz -->
    <div class="bg-white shadow-lg rounded-3xl p-12 w-full border border-[#f3e2dc] mb-20 max-w-5xl">
      <h2 class="text-3xl font-semibold text-[#c48a78] mb-10 text-center">Fashion Mood Quiz 💭</h2>

      <div class="space-y-8">
        <div>
          <label class="block text-gray-700 font-medium mb-3 text-lg">What's the occasion?</label>
          <select v-model="quiz.occasion" class="w-full border border-[#f3e2dc] rounded-md p-4 focus:ring-2 focus:ring-[#c48a78]">
            <option value="">Select</option>
            <option>Casual day out</option>
            <option>Formal event</option>
            <option>Date night</option>
            <option>Work / Meeting</option>
          </select>
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-3 text-lg">How’s the weather?</label>
          <select v-model="quiz.weather" class="w-full border border-[#f3e2dc] rounded-md p-4 focus:ring-2 focus:ring-[#c48a78]">
            <option value="">Select</option>
            <option>Sunny</option>
            <option>Rainy</option>
            <option>Cold</option>
            <option>Windy</option>
          </select>
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-3 text-lg">What’s your mood today?</label>
          <select v-model="quiz.mood" class="w-full border border-[#f3e2dc] rounded-md p-4 focus:ring-2 focus:ring-[#c48a78]">
            <option value="">Select</option>
            <option>Confident</option>
            <option>Comfy</option>
            <option>Bold</option>
            <option>Romantic</option>
          </select>
        </div>

        <button
          @click="suggestOutfit"
          class="w-full bg-[#c48a78] text-white py-4 rounded-full text-lg font-semibold hover:bg-[#b77c6d] transition"
        >
          Show My Outfit
        </button>

        <div v-if="outfit" class="mt-8 text-center">
          <p class="text-gray-700 text-xl">
            Suggested outfit:
            <span class="text-[#c48a78] font-semibold">{{ outfit }}</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Wardrobe Helper -->
    <div class="bg-white shadow-lg rounded-3xl p-12 w-full border border-[#f3e2dc] max-w-5xl">
      <h2 class="text-3xl font-semibold text-[#c48a78] mb-8 text-center">Wardrobe Helper 🧺</h2>
      <p class="text-gray-600 text-center mb-6 text-lg">
        List what you have, and we’ll suggest an outfit combo ✨
      </p>

      <input
        v-model="wardrobeItems"
        type="text"
        placeholder="e.g. white shirt, blue jeans, sneakers"
        class="border border-[#f3e2dc] rounded-md p-4 w-full mb-6 focus:ring-2 focus:ring-[#c48a78]"
      />

      <button
        @click="generateCombo"
        class="w-full bg-[#c48a78] text-white py-4 rounded-full text-lg font-semibold hover:bg-[#b77c6d] transition"
      >
        Suggest Outfit
      </button>

      <p v-if="suggestedCombo" class="mt-8 text-gray-700 text-center text-xl">
        Try pairing: <span class="text-[#c48a78] font-semibold">{{ suggestedCombo }}</span>
      </p>
    </div>

    <!-- Back Button -->
    <button
      @click="$router.push('/')"
      class="mt-20 bg-[#c48a78] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#b77c6d] transition"
    >
      Back to Home
    </button>
  </section>
</template>

<script setup>
import { ref } from "vue"

const quiz = ref({
  occasion: "",
  weather: "",
  mood: "",
})

const outfit = ref("")
const wardrobeItems = ref("")
const suggestedCombo = ref("")

const suggestOutfit = () => {
  if (!quiz.value.occasion || !quiz.value.weather || !quiz.value.mood) {
    outfit.value = "Please answer all questions to get your outfit 💕"
    return
  }

  const suggestions = [
    "A flowy floral dress with sandals 🌸",
    "A sleek blazer with jeans and boots 👢",
    "An oversized sweater with leggings ☕",
    "A midi skirt with a tucked blouse 💼",
    "A black jumpsuit with gold accessories ✨",
  ]
  outfit.value = suggestions[Math.floor(Math.random() * suggestions.length)]
}

const generateCombo = () => {
  if (!wardrobeItems.value.trim()) {
    suggestedCombo.value = "Please list some items first 👜"
    return
  }
  const combos = [
    "your white shirt with blue jeans and gold hoops",
    "your blazer over a plain tee and sneakers",
    "your skirt with tucked-in top and heels",
    "your dress layered with denim jacket and flats",
    "your crop top with high-waist pants and boots",
  ]
  suggestedCombo.value = combos[Math.floor(Math.random() * combos.length)]
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
</style>
