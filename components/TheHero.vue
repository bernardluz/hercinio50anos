<script setup lang="ts">
// Component script is minimal as logic is mostly visual/structure
</script>

<template>
    <header class="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden py-20">
        <!-- Background Animation -->
        <TheFireworks />

        <div class="relative z-10 space-y-6 max-w-4xl mx-auto flex flex-col items-center">
            <div class="inline-block border-b border-sky-300 pb-2 mb-4 animate-fade-in-up">
                <p class="text-sky-700 tracking-[0.3em] uppercase text-xs md:text-sm font-semibold">Convite Exclusivo</p>
            </div>
            
            <h1 class="font-display text-8xl md:text-[10rem] text-slate-700/90 drop-shadow-sm leading-none px-4" style="font-family: 'Great Vibes', cursive;">
                Hercínio
            </h1>
            
            <div class="flex items-center gap-6 w-full justify-center">
                <div class="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-sky-400"></div>
                <h2 class="text-4xl md:text-5xl font-serif text-slate-600 tracking-[0.2em]" style="font-family: 'Cinzel', serif;">
                    50 ANOS
                </h2>
                <div class="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-sky-400"></div>
            </div>

            <p class="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light mt-8 px-4" style="font-family: 'Montserrat', sans-serif;">
                Temos o prazer de te convidar para celebrar uma data muito especial: os 50 anos de Hercínio Gonçalves.
            </p>
        </div>

        <div class="absolute bottom-10 animate-bounce cursor-pointer">
            <svg class="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
    </header>
</template>
