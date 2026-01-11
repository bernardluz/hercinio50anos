<script setup lang="ts">
useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Great+Vibes&family=Montserrat:wght@300;400;500;600&display=swap' }
  ]
})

useSeoMeta({
  title: 'Hercínio 50 Anos - Convite Especial',
  ogTitle: 'Hercínio 50 Anos - Convite Especial',
  description: 'Você é nosso convidado para celebrar os meus 50 anos!',
  ogDescription: 'Você é nosso convidado para celebrar os meus 50 anos!',
  ogImage: '/images/foto_hercinio.jpeg',
  twitterCard: 'summary_large_image',
  themeColor: '#EBF5F9',
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
