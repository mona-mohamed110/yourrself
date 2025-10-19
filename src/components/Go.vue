<template>
  <div
    class="min-h-screen relative overflow-hidden bg-gradient-to-r from-pink-400 via-lightpink-400 to-gray-400 animate-gradient flex flex-col items-center justify-center p-6 text-white"
  >
    <!-- عناصر خلفية متحركة -->
    <div class="floating-shapes"></div>

    <!-- العنوان -->
    <h1 class="text-4xl md:text-5xl font-extrabold mb-10 fade-in">
      Start Your Journey to Discover the Best Version of You
    </h1>

    <!-- الكروت -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl fade-in-cards"
    >
      <router-link to="/beauty">
    <div class="card" @click="$router.push('/beauty')">
        <span class="emoji">💄</span>
        <h2>Beauty & Glow</h2>
        <p>Discover skincare secrets, makeup tips and feminine care.</p>
      </div>
      </router-link>
      <router-link to="/health">
      <div class="card" @click="$router.push('/health')">
        <span class="emoji">⚡</span>
        <h2>Health & Wellness</h2>
        <p>Boost your energy, fitness tips and balanced living.</p>
      </div>
      </router-link>
      <router-link to="/fashon">
      <div class="card" @click="$router.push('/style')">
        <span class="emoji">👗</span>
        <h2>Fashion & Style</h2>
        <p>Dress confidently and express your unique personality.</p>
      </div>
      </router-link>
      <router-link to="/mindest">
      <div class="card" @click="$router.push('/mind')">
        <span class="emoji">🧠</span>
        <h2>Mindset & Confidence</h2>
        <p>Grow inner strength and embrace your feminine power.</p>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* حركة الخلفية */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 8s ease infinite;
}

/* حركة العناصر */
.card {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.card:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.4);
}
.card h2 {
  font-size: 1.8rem;
  margin: 10px 0;
  font-weight: bold;
}
.card p {
  opacity: 0.9;
}
.emoji {
  font-size: 3rem;
}

/* ترانزيشن الظهور */
.fade-in {
  animation: fadeIn 1s ease forwards;
}
.fade-in-cards {
  animation: fadeUp 1.2s ease forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* عناصر طايرة */
.floating-shapes::before,
.floating-shapes::after {
  content: "❤";
  position: absolute;
  font-size: 2rem;
  animation: float 6s infinite ease-in-out;
  opacity: 0.4;
}
.floating-shapes::before {
  left: 20%;
  animation-duration: 5s;
}
.floating-shapes::after {
  right: 25%;
  animation-duration: 7s;
}
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
