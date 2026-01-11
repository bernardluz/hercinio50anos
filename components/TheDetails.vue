<template>
    <section class="py-24 px-4 bg-white relative">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            <!-- Details -->
            <div class="space-y-12">
                <h3 class="text-4xl font-serif text-sky-800 mb-8 text-center md:text-left" style="font-family: 'Cinzel', serif;">Detalhes do Evento</h3>
                <div class="space-y-8">
                     <div class="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <div class="w-12 h-12 flex-shrink-0 bg-sky-50 rounded-full flex items-center justify-center text-sky-600">
                             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </div>
                        <div>
                            <p class="text-sm text-slate-400 uppercase tracking-widest">Data</p>
                            <p class="text-xl text-slate-800 font-medium">14 de Março, 2026</p>
                        </div>
                     </div>

                     <div class="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <div class="w-12 h-12 flex-shrink-0 bg-sky-50 rounded-full flex items-center justify-center text-sky-600">
                             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div>
                            <p class="text-sm text-slate-400 uppercase tracking-widest">Hora</p>
                            <p class="text-xl text-slate-800 font-medium">19:00 horas</p>
                        </div>
                     </div>

                     <div class="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <div class="w-12 h-12 flex-shrink-0 bg-sky-50 rounded-full flex items-center justify-center text-sky-600">
                             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <div>
                            <p class="text-sm text-slate-400 uppercase tracking-widest">Local</p>
                            <p class="text-xl text-slate-800 font-medium">Quinta das Cruzadas</p>
                            <p class="text-slate-500 text-sm">Rua Do Moinho, Sintra - Portugal</p>
                        </div>
                     </div>
                </div>
            </div>

            <!-- Map -->
            <TheMap />
        </div>
    </section>
</template>
