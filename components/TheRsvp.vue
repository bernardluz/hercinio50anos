<script setup lang="ts">
const { sendRsvpEmail, isSending } = useEmailService()

const rsvpName = ref('')
const rsvpMessage = ref('')
const isSubmitted = ref(false)

const submitRSVP = async () => {
    if (!rsvpName.value) return

    const success = await sendRsvpEmail({
        name: rsvpName.value,
        message: rsvpMessage.value
    })

    if (success) {
        isSubmitted.value = true
    }
}
</script>

<template>
    <section class="py-24 px-4 bg-white relative">
         <div class="max-w-xl mx-auto">
             <div class="text-center mb-12">
                 <h3 class="text-4xl font-serif text-sky-800 mb-4" style="font-family: 'Cinzel', serif;">Confirmar Presença</h3>
                 <p class="text-slate-500">Por favor, confirme a sua presença até o dia <strong class="text-sky-700">28 de Fevereiro</strong> para uma melhor organização.</p>
             </div>

             <div class="bg-white border border-slate-100 p-8 md:p-12 rounded-3xl shadow-xl shadow-sky-900/5 relative overflow-hidden">
                 <div class="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-bl-[100px] -mr-8 -mt-8 opacity-50"></div>
                 
                 <div v-if="isSubmitted" class="relative z-10 text-center py-12 space-y-6 animate-fade-in-up">
                    <div class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h4 class="text-3xl font-serif text-sky-800" style="font-family: 'Cinzel', serif;">Obrigado, {{ rsvpName }}!</h4>
                    <p class="text-slate-600 text-lg">A sua presença foi confirmada com sucesso.</p>
                    <p class="text-slate-500">Estamos ansiosos para celebrar consigo.</p>
                    <button @click="isSubmitted = false; rsvpName = ''; rsvpMessage = ''" class="text-sky-600 font-medium hover:text-sky-800 underline mt-4">Enviar outra confirmação</button>
                 </div>

                 <form v-else @submit.prevent="submitRSVP" class="space-y-6 relative z-10">
                     <div class="space-y-2">
                         <label class="text-xs text-slate-500 uppercase tracking-wider font-semibold ml-1">Nome Completo</label>
                         <input v-model="rsvpName" type="text" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-800 focus:outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-500/10 transition-all placeholder:text-slate-400" placeholder="Introduza o seu nome" required />
                     </div>

                     <div class="space-y-2">
                         <label class="text-xs text-slate-500 uppercase tracking-wider font-semibold ml-1">Mensagem de Carinho</label>
                         <textarea v-model="rsvpMessage" rows="4" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-800 focus:outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-500/10 transition-all placeholder:text-slate-400 resize-none" placeholder="Deixe uma mensagem para o Hercínio..."></textarea>
                     </div>

                     <button 
                        type="submit" 
                        :disabled="isSending"
                        class="w-full bg-sky-700 text-white font-semibold tracking-wide py-4 rounded-xl hover:bg-sky-800 transition-all transform active:scale-[0.98] shadow-lg shadow-sky-600/20 mt-4 disabled:opacity-70 disabled:cursor-not-allowed">
                         {{ isSending ? 'Enviando...' : 'Confirmar Presença' }}
                     </button>
                 </form>
             </div>
         </div>
    </section>
</template>
