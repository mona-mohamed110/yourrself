<template>
  <section class="relative min-h-screen flex items-center justify-center p-6 page-hero">
    <!-- animated gradient background layer -->
    <div class="absolute inset-0 animate-gradient -z-10"></div>

    <!-- soft floating blobs -->
    <div aria-hidden="true" class="floating-blob left-0"></div>
    <div aria-hidden="true" class="floating-blob right-0"></div>

    <!-- content -->
    <div class="max-w-3xl text-center px-4">
      <h1
        class="title text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6"
        :class="{ 'fade-in': titleVisible }"
      >
        Start Your Journey to Discover the Best Version of You
      </h1>

      <div
        class="typing-wrapper relative mx-auto text-lg sm:text-xl md:text-2xl font-medium text-gray-800"
        :class="{ 'fade-in': typingVisible }"
        aria-live="polite"
      >
        <!-- cursor + typed text -->
        <span v-html="displayedText"></span><span class="cursor" :class="{ 'blink': cursorBlink }">|</span>
      </div>

      <!-- small hint (optional) -->
      <p class="mt-6 text-sm text-gray-600">Tap any card to explore — or sit back and read the little notes 💖</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

/* --------- Configuration --------- */
const messages = [
  `You are not behind in life. You are exactly where you need to be.`,
  `مش مطلوب منك تكوني كاملة… المطلوب تكوني حقيقية.`,
  `Your feminine energy is your power, not your weakness.`,
  `ابدأي بخطوة صغيرة اليوم؛ النهاية تحلو بالثبات.`,
  `Beauty begins the moment you decide to be yourself.`,
  `اطمئني… الخير جايك في أوان الله.`,
  `Small routines build big changes. Keep going!`,
  `قولي لنفسك: أنا كافية، أنا قادرة، أنا مستمرة.`
]

// total time visible per message (ms)
const visibleDuration = 5000 // 5 seconds per message (user choice)
const typingSpeedPerChar = 60 // ms per character (medium speed)
const minPauseAfterTyping = 600 // ensure some pause after typing before fade

/* --------- Reactive state --------- */
const displayedText = ref('')
const idx = ref(0)
const titleVisible = ref(false)
const typingVisible = ref(false)
const cursorBlink = ref(true)

let running = true
let loopCancel = false

/* helper sleep */
const sleep = (ms) => new Promise((res) => setTimeout(res, ms))

async function runTypingLoop() {
  titleVisible.value = true
  await sleep(300) // small delay for title fade

  typingVisible.value = true
  while (running && !loopCancel) {
    const i = idx.value % messages.length
    const msg = messages[i]
    displayedText.value = ''
    cursorBlink.value = true

    // type characters one by one
    const start = Date.now()
    for (let c = 0; c < msg.length; c++) {
      // append char; allow HTML entities safe — messages are plain text here
      displayedText.value += msg[c]
      await sleep(typingSpeedPerChar)
      if (!running || loopCancel) break
    }
    const typedDuration = Date.now() - start

    // ensure total visible time equals visibleDuration (but at least minPauseAfterTyping)
    const remain = Math.max(minPauseAfterTyping, visibleDuration - typedDuration)
    await sleep(remain)

    // fade out effect: toggle visibility class
    typingVisible.value = false
    cursorBlink.value = false
    await sleep(280) // short fade-out (matches CSS transition)

    // move to next message
    idx.value += 1
    typingVisible.value = true
    await sleep(120) // short fade-in delay
  }
}

/* lifecycle */
onMounted(() => {
  running = true
  runTypingLoop()
})

onBeforeUnmount(() => {
  running = false
  loopCancel = true
})
</script>

<style scoped>
/* ---------------------------
  Page layout & navbar safety
---------------------------- */
.page-hero {
  padding-top: 0; /* mobile: avoid being offset under fixed navbar */
}
@media (min-width: 768px) {
  .page-hero {
    padding-top: 64px; /* if you have a fixed navbar increase/decrease this */
  }
}

/* ---------------------------
  Animated Gradient Background
---------------------------- */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  25% { background-position: 30% 50%; }
  50% { background-position: 60% 50%; }
  75% { background-position: 90% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient {
  background: linear-gradient(90deg, #ffe6f0 0%, #f8f4f6 45%, #ffeef7 100%);
  background-size: 300% 300%;
  animation: gradientShift 12s ease infinite;
  filter: saturate(1.02);
}

/* floating blobs (soft decorative) */
.floating-blob {
  position: absolute;
  top: 8%;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  opacity: 0.12;
  z-index: -5;
  pointer-events: none;
  background: radial-gradient(circle at 30% 30%, rgba(255,182,193,0.38), rgba(255,182,193,0.08) 40%, rgba(250,250,250,0.01));
  animation: blobFloat 11s ease-in-out infinite;
}
.floating-blob.right-0 {
  right: -60px;
  top: 55%;
  width: 340px;
  height: 340px;
  background: radial-gradient(circle at 70% 70%, rgba(179,157,219,0.34), rgba(179,157,219,0.06) 40%, rgba(250,250,250,0.01));
  animation-duration: 14s;
}
.floating-blob.left-0 { left: -60px; top: 6%; animation-duration: 12s; }

@keyframes blobFloat {
  0% { transform: translateY(0) rotate(0deg) scale(1); }
  50% { transform: translateY(-14px) rotate(4deg) scale(1.02); }
  100% { transform: translateY(0) rotate(0deg) scale(1); }
}

/* ---------------------------
  Title & Typing styles
---------------------------- */
.title {
  color: #222;
  line-height: 1.02;
  transform-origin: center;
  opacity: 0;
  transition: opacity 420ms ease, transform 420ms ease;
}
.title.fade-in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.typing-wrapper {
  display: inline-block;
  min-height: 2.2rem;
  opacity: 0;
  transition: opacity 280ms ease;
}
.typing-wrapper.fade-in {
  opacity: 1;
}

/* cursor */
.cursor {
  display: inline-block;
  margin-left: 6px;
  color: #c026d3; /* playful pink-ish cursor */
  opacity: 1;
  transition: opacity 160ms ease;
}
.cursor.blink {
  animation: blink 900ms steps(1) infinite;
}
@keyframes blink {
  0% { opacity: 1; }
  49% { opacity: 0; }
  100% { opacity: 1; }
}

/* ---------------------------
  Responsive typography
---------------------------- */
.title { font-family: ui-rounded, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; font-weight: 800; }
.typing-wrapper { font-family: ui-rounded, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; color: #2a2a2a; }

/* small screens */
@media (max-width: 640px) {
  .title { font-size: 1.55rem; }
  .typing-wrapper { font-size: 1rem; min-height: 1.8rem; }
}

/* medium+ */
@media (min-width: 641px) {
  .title { font-size: 2.25rem; }
  .typing-wrapper { font-size: 1.25rem; }
}
@media (min-width: 1024px) {
  .title { font-size: 3rem; }
  .typing-wrapper { font-size: 1.5rem; }
}
</style>
