<template>
  <div class="print-reset min-h-screen bg-[#E5E5E5] py-8 flex justify-center items-center">
    <!-- Squarish Container: 200mm x 230mm -->
    <div class="relative bg-[#EBF5F9] text-slate-800 shadow-2xl overflow-hidden border border-slate-200 w-[200mm] min-h-[230mm] mx-auto print:shadow-none print:border-none print:m-0 print:w-[200mm] print:h-[230mm] page-squarish">
      
      <!-- Texture Overlay -->
      <div class="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-multiply bg-texture"></div>

      <!-- Decorative ornamental border (Double Line + Corners) -->
      <div class="absolute inset-3 border-[3px] border-double border-slate-300 pointer-events-none print:inset-0 print:border-4"></div>
      <div class="absolute inset-4 border border-slate-200 pointer-events-none print:inset-1.5"></div>

      <!-- Ornamental Corners (SVG) -->
      <!-- Top Left -->
      <div class="absolute top-5 left-5 w-14 h-14 text-sky-800/40 transform -translate-x-1 -translate-y-1 z-10 p-1 pointer-events-none">
         <svg viewBox="0 0 100 100" fill="currentColor">
           <path d="M0,0 L40,0 C20,0 20,20 0,40 Z M10,10 L30,10 C20,10 20,20 10,30 Z" />
           <path d="M5,5 C30,5 30,30 5,60 L5,5 Z" />
           <path d="M0,0 C60,0 60,10 90,10 C80,10 60,10 60,30 C60,20 50,0 0,0" /> 
           <path d="M2,2 L50,2 Q20,2 20,40 L2,2" />
         </svg>
      </div>
      <!-- Top Right -->
       <div class="absolute top-5 right-5 w-14 h-14 text-sky-800/40 transform translate-x-1 -translate-y-1 rotate-90 z-10 p-1 pointer-events-none">
         <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M0,0 L40,0 C20,0 20,20 0,40 Z M10,10 L30,10 C20,10 20,20 10,30 Z" />
           <path d="M5,5 C30,5 30,30 5,60 L5,5 Z" />
           <path d="M0,0 C60,0 60,10 90,10 C80,10 60,10 60,30 C60,20 50,0 0,0" /> 
           <path d="M2,2 L50,2 Q20,2 20,40 L2,2" />
         </svg>
      </div>
      <!-- Bottom Right -->
       <div class="absolute bottom-5 right-5 w-14 h-14 text-sky-800/40 transform translate-x-1 translate-y-1 rotate-180 z-10 p-1 pointer-events-none">
         <svg viewBox="0 0 100 100" fill="currentColor">
           <path d="M0,0 L40,0 C20,0 20,20 0,40 Z M10,10 L30,10 C20,10 20,20 10,30 Z" />
           <path d="M5,5 C30,5 30,30 5,60 L5,5 Z" />
           <path d="M0,0 C60,0 60,10 90,10 C80,10 60,10 60,30 C60,20 50,0 0,0" /> 
           <path d="M2,2 L50,2 Q20,2 20,40 L2,2" />
         </svg>
      </div>
      <!-- Bottom Left -->
       <div class="absolute bottom-5 left-5 w-14 h-14 text-sky-800/40 transform -translate-x-1 translate-y-1 -rotate-90 z-10 p-1 pointer-events-none">
         <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M0,0 L40,0 C20,0 20,20 0,40 Z M10,10 L30,10 C20,10 20,20 10,30 Z" />
           <path d="M5,5 C30,5 30,30 5,60 L5,5 Z" />
           <path d="M0,0 C60,0 60,10 90,10 C80,10 60,10 60,30 C60,20 50,0 0,0" /> 
           <path d="M2,2 L50,2 Q20,2 20,40 L2,2" />
         </svg>
      </div>

      <!-- Content Wrapper -->
      <div class="relative z-20 flex flex-col items-center text-center h-[230mm] justify-between py-10 px-10 print:px-10 print:py-10">
        
        <!-- Header -->
        <header class="space-y-1 w-full pt-2">
          <h1 class="text-xl text-sky-900 font-bold tracking-widest uppercase border-b-2 border-double border-sky-100 pb-1 inline-block px-6" style="font-family: 'Cinzel', serif;">
            Aniversário – 50 Anos
          </h1>
          <h2 class="text-6xl text-slate-700 leading-tight" style="font-family: 'Great Vibes', cursive;">
            Hercínio Gonçalves
          </h2>
          <div class="mt-2 mb-6 flex justify-center">
             <img src="/images/asdasd.png" alt="Ornamental Divider" class="w-[300px] h-auto opacity-90 mix-blend-multiply" />
          </div>
        </header>

        <!-- Sections Container: Flex Grow to Fill Space -->
        <div class="flex-grow flex flex-col justify-center w-full py-2 text-slate-700 space-y-4" style="font-family: 'Playfair Display', serif;">
          
          <!-- Serviço Volante -->
          <section class="space-y-1">
            <h3 class="text-base text-sky-800 tracking-widest uppercase font-semibold relative inline-block border-b border-sky-100 pb-0.5" style="font-family: 'Cinzel', serif;">
              Serviço Volante
            </h3>
            
            <div class="text-xs text-slate-600 leading-relaxed italic max-w-2xl mx-auto px-4">
               <p>
                 Patés de marisco e atum • Tostas • Cogumelos salteados • Tábuas de queijos e enchidos • Pastelinhos de bacalhau • 
                 Rissóis de camarão • Croquetes de vitela • Chamucas • Tiras de milho com guacamole • 
                 Pão com queijo e ervas aromáticas • Broa de farinheira • Coxinhas • Estaladiço de brie
               </p>
            </div>
          </section>

          <!-- Divider -->
          <div class="w-16 h-px bg-slate-300 mx-auto opacity-40"></div>

          <!-- Refeição Principal -->
          <section class="space-y-3">
            <h3 class="text-lg text-sky-800 tracking-widest uppercase font-semibold" style="font-family: 'Cinzel', serif;">
              Refeição Principal
            </h3>
            
            <div class="space-y-3">
              <div class="space-y-0.5">
                <h4 class="text-xs text-slate-500 font-bold tracking-wide uppercase" style="font-family: 'Cinzel', serif;">Entrada</h4>
                <p class="text-base italic text-slate-700">Aveludado de legumes</p>
              </div>

              <div class="space-y-1">
                 <h4 class="text-xs text-slate-500 font-bold tracking-wide uppercase" style="font-family: 'Cinzel', serif;">Pratos Principais</h4>
                 
                 <div class="grid grid-cols-2 gap-6 max-w-3xl mx-auto items-start">
                   <div class="p-1 border-r border-slate-200">
                     <p class="text-base text-slate-800 font-medium leading-tight">Bacalhau à Cruzadas,</p>
                     <p class="text-xs text-slate-500 italic mt-0.5">acompanhado de salada</p>
                   </div>
                   <div class="p-1">
                     <p class="text-base text-slate-800 font-medium leading-tight">Bifinhos de Vitela</p>
                     <p class="text-xs text-slate-500 italic leading-tight mt-0.5">com molho à portuguesa, arroz branco e legumes salteados</p>
                   </div>
                 </div>
              </div>
            </div>
          </section>

          <!-- Divider -->
          <div class="w-16 h-px bg-slate-300 mx-auto opacity-40"></div>

          <!-- Sobremesa, Bebidas, Bar -->
          <div class="grid grid-cols-3 gap-4 w-full max-w-4xl mx-auto items-start pt-1">
             <!-- Sobremesa -->
             <section class="space-y-0.5 col-span-1">
                <h3 class="text-xs text-sky-800 tracking-widest uppercase font-bold" style="font-family: 'Cinzel', serif;">
                  Sobremesa à Mesa
                </h3>
                <p class="text-sm text-slate-700 italic leading-tight">Brownie de chocolate <br/><span class="text-[10px] text-slate-500 not-italic">com caramelo salgado</span></p>
             </section>

             <!-- Bebidas -->
             <section class="space-y-0.5 col-span-1 border-x border-slate-200/60 px-1">
              <h3 class="text-xs text-sky-800 tracking-widest uppercase font-bold" style="font-family: 'Cinzel', serif;">
                Bebidas Durante a Refeição
              </h3>
              <div class="text-[11px] text-slate-600 leading-relaxed italic">
                 <p>Vinho tinto e branco (Reguengos)</p>
                 <p>Sangria • Cerveja</p>
                 <p>Sumo de laranja • Refrigerantes • Água</p>
              </div>
            </section>

             <!-- Café -->
             <section class="space-y-0.5 col-span-1">
              <h3 class="text-xs text-sky-800 tracking-widest uppercase font-bold" style="font-family: 'Cinzel', serif;">
                Café e Bar Aberto
              </h3>
              <div class="text-[11px] text-slate-600 leading-relaxed italic">
                <p>Amêndoa amarga • Gin • Licor Beirão</p>
                <p>Licor de whisky • Whisky novo</p>
              </div>
            </section>
          </div>

        </div>

        <!-- Classic Footer -->
        <footer class="pb-3 w-full space-y-1">
          <div class="flex flex-col items-center justify-center space-y-1">
            <span class="text-xl text-sky-800">🎂</span>
            <p class="text-sm text-slate-800 font-serif italic" style="font-family: 'Playfair Display', serif;">
             "Cantar dos parabéns ao aniversariante e corte do bolo"
            </p>
          </div>
           <p class="text-4xl text-slate-700 transform -rotate-2 pt-1" style="font-family: 'Great Vibes', cursive;">
            Divirtam-se!
          </p>
        </footer>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensure background colors print */
@media print {
  @page {
    /* Set custom size for print */
    size: 200mm 230mm;
    margin: 0;
  }
  .page-squarish {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    width: 200mm;
    height: 230mm;
    padding: 0;
    margin: 0;
    page-break-after: always;
    overflow: hidden;
  }
  
  .shadow-2xl {
    box-shadow: none !important;
  }
  .print-reset {
    background: none;
    padding: 0;
    display: block;
  }
}

/* Screen Simulation */
.page-squarish {
    aspect-ratio: 200/230;
}

.bg-texture {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
</style>
