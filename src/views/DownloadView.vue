<template>
  <section
    class="w-full min-h-screen bg-gradient-to-br from-[#e7dede] to-[#bfb3b3] flex flex-col items-center justify-center md:justify-center pt-32 md:pt-0 pb-12 px-6"
    id="Download"
  >
    <!-- العنوان -->
    <h2 class="text-5xl md:text-6xl font-extrabold text-[#5a3f3f] drop-shadow-lg mb-12 animate-fadeIn text-center">
      Download the App
    </h2>

    <!-- الصور -->
    <div class="flex flex-col md:flex-row items-center gap-8 mb-12 animate-scaleUp">
      <img
        :src="appStore"
        alt="App Store"
        class="w-64 md:w-80 cursor-pointer transition-transform duration-500 hover:scale-110 hover:drop-shadow-2xl"
      />
      <img
        :src="googlePlay"
        alt="Google Play"
        class="w-64 md:w-80 cursor-pointer transition-transform duration-500 hover:scale-110 hover:drop-shadow-2xl"
      />
    </div>

    <!-- الكلام تحت الصور -->
    <div class="max-w-4xl text-center md:text-center space-y-6 text-gray-700 text-lg md:text-xl animate-fadeIn">
      <p>
        At solmen li esser necessi uniform grammatica, pronunciation sommun paroles, quande li coalingue simplic regulari quam coalescent lingues.
      </p>
      <ul class="list-disc list-inside space-y-2">
        <li>Vivamus semper odio in nibh ultricies</li>
        <li>Duis rhoncus lectus at velit hendrerit quis</li>
        <li>Nam gravida magna vitae ante dignissim</li>
      </ul>
      <p>
        Necessi uniform grammatica, pronunciation sommun paroles, quande li coalingue simplic regulari coalescent lingues.
      </p>
    </div>
  </section>
</template>

<script setup>
import appStore from '../assets/img/appstore.png'
import googlePlay from '../assets/img/google-play.png'
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 1.5s ease-out forwards;
}
@keyframes scaleUp {
  from { opacity: 0; transform: scale(0.7); }
  to { opacity: 1; transform: scale(1); }
}
.animate-scaleUp {
  animation: scaleUp 1.5s ease-out forwards;
}
</style>
