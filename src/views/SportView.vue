<script setup>
// استيراد الصور من مجلد assets
import runImg from '../assets/img/run.jpg'
import yogaImg from '../assets/img/fig-nelson.jpg'
import swimImg from '../assets/img/swwww.jpg'
import horseImg from '../assets/img/hhoorr.jpg'
import weightImg from '../assets/img/weightt.avif'
import rideImg from '../assets/img/rideeee.avif'
import boxImg from '../assets/img/booooox.jpg'
import climbImg from '../assets/img/climb.jpg'

const sports = [
  { title: 'Running', image: runImg, description: 'Running helps improve stamina, heart health, and mental clarity.' },
  { title: 'Yoga', image: yogaImg, description: 'Yoga enhances flexibility, mindfulness, and body strength.' },
  { title: 'Swimming', image: swimImg, description: 'Swimming is a full-body workout that burns calories efficiently.' },
  { title: 'Horses', image: horseImg, description: 'Horse riding builds balance, coordination, and confidence.' },
  { title: 'Lifting weights', image: weightImg, description: 'Weight training increases muscle mass and boosts metabolism.' },
  { title: 'Riding a wheel', image: rideImg, description: 'Cycling improves endurance and strengthens leg muscles.' },
  { title: 'Boxing', image: boxImg, description: 'Boxing is excellent for building strength and agility.' },
  { title: 'Climbing', image: climbImg, description: 'Climbing challenges both your physical and mental strength.' }
]
</script>

<template>
  <section class="sports bg-gradient-to-b from-gray-200 to-pink-100 py-20" id="sports">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-extrabold text-gray-700 italic drop-shadow-md animate-bounce">
          Sports
        </h2>
        <p class="text-gray-600 mt-2 tracking-wide text-lg">The greatest example</p>
        <div class="mt-4 h-1 w-24 bg-pink-500 mx-auto rounded-full shadow-lg"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div
          v-for="(sport, index) in sports"
          :key="index"
          class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
        >
          <img :src="sport.image" alt="Sport Image" class="w-full h-56 object-cover" />
          <div class="p-6 text-center">
            <h3 class="text-2xl font-bold text-gray-700 mb-3">{{ sport.title }}</h3>
            <p class="text-gray-500 mb-5 leading-relaxed">{{ sport.description }}</p>
            <button class="border-2 border-pink-500 text-pink-600 font-bold px-6 py-2 rounded-lg hover:bg-pink-600 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sports {
  scroll-margin-top: 100px;
}
</style>
