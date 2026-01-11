<script setup lang="ts">
useHead({
  title: 'Hercínio 50 Anos - Convite Especial',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Great+Vibes&family=Montserrat:wght@300;400;500;600&display=swap' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-[#EBF5F9] text-slate-800 font-sans selection:bg-sky-200 selection:text-sky-900 overflow-x-hidden">
    <TheHero />
    <TheAbout />
    <TheDetails />
    <TheRsvp />
    <TheFooter />
  </div>
</template>

<style>
body {
    background-color: #EBF5F9;
}
</style>
