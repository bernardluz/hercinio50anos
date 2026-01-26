<template>
  <div>
    <TheMenu />
    
    <div class="text-center pb-8 print:hidden">
       <NuxtLink to="/" class="inline-flex items-center gap-2 text-sky-700 hover:text-sky-900 font-cinzel border border-sky-200 bg-white/50 px-6 py-2 rounded-full transition-all hover:bg-white hover:shadow-md">
         <span>←</span> Voltar ao Convite
       </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Ementa - Aniversário 50 Anos',
})
</script>
