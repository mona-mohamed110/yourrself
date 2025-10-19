<template>
  <section
    id="About"
    class="about bg-gradient-to-br from-gray-100 via-gray-200 to-pink-100 w-full min-h-screen flex items-center py-20"
  >
    <div class="w-full px-6 md:px-16">
      <!-- Title -->
      <div class="flex flex-col justify-center items-center mb-20">
        <h2 class="about-title text-5xl md:text-6xl text-[#644040] text-center">
          About Us
        </h2>
        <div class="wavy-line mt-3"></div>
      </div>

      <!-- Content -->
      <div class="flex flex-col md:flex-row items-center justify-between w-full h-full">
        <!-- Text -->
        <div
          class="md:w-1/2 mb-10 md:mb-0 text-center md:text-left px-5 animate-fadeIn"
        >
          <h5 class="text-4xl md:text-5xl about-subtitle mb-6 leading-tight">
            YOUR<span class="text-[#644040]">SELF</span>
          </h5>
          <p
            class="text-[#693d3d] text-lg md:text-xl mb-8 leading-relaxed tracking-wide"
          >
            At <strong>Yourself</strong>, we believe that every woman is a world
            of strength, grace, and limitless potential. You are more than
            responsibilities, expectations, or what society tells you to be.
            This platform is your sanctuary — a space made to help you reconnect
            with your true essence, heal your heart, and elevate your mind.
            Whether you're seeking inner peace, emotional balance, self-love, or
            a purposeful lifestyle, <span class="text-pink-600 font-semibold"
              >Yourself</span
            >
            is your journey of transformation. Here, you rise not just to live —
            but to flourish, inspire, and reclaim your power as the remarkable
            woman you were born to be.
          </p>
          <router-link to="/contact">
          <button
            class="border-2 border-pink-600 text-pink-600 font-bold px-10 py-4 text-lg rounded-lg hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            Learn More
          </button>
          </router-link>
        </div>

        <!-- Image -->
        <div class="md:w-1/2 flex justify-center animate-fadeIn">
          <img
            src="../assets/img/girl-ba-removebg-preview.png"
            alt="About Image"
            class="w-full max-w-[650px] object-contain drop-shadow-2xl rounded-2xl transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Importing Feminine Script Font */
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap");

/* Title Font */
.about-title {
  font-family: "Dancing Script", cursive;
  font-weight: 700;
  letter-spacing: 2px;
}

/* Subtitle */
.about-subtitle {
  font-family: "Dancing Script", cursive;
  font-weight: 700;
  color: #946d6d;
}

/* Wavy Line Under Title */
.wavy-line {
  width: 120px;
  height: 8px;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Wavy_line.svg/2560px-Wavy_line.svg.png");
  background-size: cover;
  background-repeat: no-repeat;
}

/* Smooth Fade-In Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 1.2s ease-in-out both;
}

.about {
  scroll-margin-top: 80px;
}
</style>
