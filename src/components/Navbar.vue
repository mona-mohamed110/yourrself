<template>
  <nav
    class="bg-white/90 backdrop-blur-md shadow-md fixed w-full top-0 left-0 z-50"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <div class="flex items-center">
          <h1 class="text-2xl font-bold text-pink-600 tracking-wide">
            <span class="text-gray-600 text-3xl">YOUR</span>SELF
          </h1>
        </div>

        <!-- Menu button (mobile) -->
        <div class="flex items-center md:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="text-gray-800 hover:text-pink-600 focus:outline-none"
          >
            <svg
              class="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!isOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Links + Search (desktop) -->
        <div class="hidden md:flex items-center space-x-6">
          <router-link
            to="/"
            class="text-gray-700 hover:text-pink-600 font-medium transition"
            >Home</router-link
          >

          <router-link
            to="/about"
            class="text-gray-700 hover:text-pink-600 font-medium transition"
            >About</router-link
          >

          <router-link
            to="/sport"
            class="text-gray-700 hover:text-pink-600 font-medium transition"
            >Sports</router-link
          >

          <router-link
            to="/download"
            class="text-gray-700 hover:text-pink-600 font-medium transition"
            >Download</router-link
          >

          <router-link
            to="/contact"
            class="text-gray-700 hover:text-pink-600 font-medium transition"
            >Contact</router-link
          >
          <!-- Search Form -->
          <form class="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search"
              class="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              type="submit"
              class="text-pink-600 border border-pink-600 rounded-lg px-3 py-1 font-semibold hover:bg-gray-200 transition"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="md:hidden bg-white shadow-md px-4 py-4 space-y-3 text-center"
      >
        <router-link
          to="/"
          class="block text-gray-700 hover:text-pink-600 font-medium"
          @click="isOpen = false"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="block text-gray-700 hover:text-pink-600 font-medium"
          @click="isOpen = false"
          >About</router-link
        >
        <router-link
          to="/sport"
          class="block text-gray-700 hover:text-pink-600 font-medium"
          @click="isOpen = false"
          >Sports</router-link
        >
        <router-link
          to="/download"
          class="block text-gray-700 hover:text-pink-600 font-medium"
          @click="isOpen = false"
          >Download</router-link
        >
        <router-link
          to="/contact"
          class="block text-gray-700 hover:text-pink-600 font-medium"
          @click="isOpen = false"
          >Contact</router-link
        >

        <!-- Search Form (mobile) -->
        <form class="flex items-center justify-center space-x-2 pt-3">
          <input
            type="text"
            placeholder="Search"
            class="border border-gray-300 rounded-lg px-3 py-1 w-40 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            class="text-pink-600 border border-pink-600 rounded-lg px-3 py-1 font-semibold hover:bg-gray-200 transition"
          >
            Go
          </button>
        </form>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
