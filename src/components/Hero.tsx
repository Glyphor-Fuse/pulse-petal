import React from 'react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 px-4">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none floral-damask-pattern"></div>
      
      <div className="relative z-10 text-center space-y-6 max-w-5xl">
        <h1 className="text-7xl md:text-[12rem] font-black leading-none tracking-tighter uppercase italic signal-vibrate">
          Pulse <span className="text-neon-lime block md:inline">&</span> Petal
        </h1>
        
        <div className="bg-neon-lime text-black inline-block px-4 py-2 font-mono font-bold text-xl md:text-2xl -rotate-2 signal-vibrate">
          106.4 FM // SPITALFIELDS BEANS
        </div>
        
        <p className="max-w-xl mx-auto text-lg md:text-xl font-serif italic text-white/80 leading-relaxed pt-8">
          Where Huguenot master weavers meet the 3AM basement drop. Intricate notes of jasmine and stonefruit, distorted by a raw London edge.
        </p>
        
        <div className="pt-10 flex flex-wrap justify-center gap-4">
          <button className="bg-white text-black px-8 py-4 font-black uppercase tracking-widest hover:bg-neon-lime transition-colors border-2 border-white hover:border-neon-lime shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(163,255,0,1)]">
            Shop the Drop
          </button>
          <button className="bg-transparent text-white border-2 border-white px-8 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            The Weave
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
