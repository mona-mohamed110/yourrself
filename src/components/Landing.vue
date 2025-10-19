<template>
  <section
    class="landing relative flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-pink-300"
    style="margin-top: 4rem"
  >
    <div class="relative text-center text-gray-800 px-4">
      <h1 class="landing-title text-5xl md:text-7xl mb-4 drop-shadow-lg">
        Know more about yourself
      </h1>
      <div class="wavy-line mx-auto mb-4"></div>
      <p
        class="text-lg md:text-2xl font-semibold mb-6 drop-shadow-md tracking-wide"
      >
        We are here to help you educate yourself and your life
      </p>
      <router-link to="/page">
        <button
          class="border-2 border-pink-600 text-pink-600 px-8 py-3 text-lg rounded-lg font-bold hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-2xl"
        >
          LET'S GO
        </button>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap");

.landing-title {
  font-family: "Dancing Script", cursive;
  font-weight: 700;
  letter-spacing: 2px;
}

.wavy-line {
  width: 140px;
  height: 10px;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Wavy_line.svg/2560px-Wavy_line.svg.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
