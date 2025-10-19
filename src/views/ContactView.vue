<template>
  <section
    id="Contact"
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5e4e4] to-[#e7dede] px-6 py-12"
  >
    <div class="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-16 flex flex-col md:flex-row gap-10">
      
      <!-- نص المعلومات -->
      <div class="flex-1 flex flex-col justify-center space-y-6">
        <h2 class="text-4xl md:text-5xl font-extrabold text-[#644040]">Get in Touch</h2>
        <p class="text-gray-600 text-lg md:text-xl">
          We'd love to hear from you! Whether you have a question, feedback or just want to say hi, fill out the form and we'll get back to you as soon as possible.
        </p>
        <div class="space-y-2 text-gray-700">
          <p><span class="font-semibold">Email:</span> hello@yourself.com</p>
          <p><span class="font-semibold">Phone:</span> +20 123 456 7890</p>
          <p><span class="font-semibold">Address:</span> Cairo, Egypt</p>
        </div>
      </div>

      <!-- Form -->
      <div class="flex-1">
        <form class="space-y-6">
          <div>
            <label class="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Your Message"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-pink-600 text-white font-semibold py-3 rounded-lg hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>
  </section>
</template>

<script setup>
// هنا ممكن تضيف submit logic لو حابة توصل الرسائل لEmail أو API
</script>

<style scoped>
/* ممكن تضيف أي animation خفيفة هنا */
</style>
