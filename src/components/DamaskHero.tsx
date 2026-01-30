import React from 'react';
import { motion } from 'framer-motion';

export const DamaskHero = ({ tuning }: { tuning: number }) => {
  const vibration = tuning * 15;
  const glitch = tuning > 0.8 ? "glitch-active" : "";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black py-20">
      {/* Spitalfields Damask Background */}
      <motion.div 
        animate={{ 
          x: [0, -vibration, vibration, 0],
          y: [0, vibration, -vibration, 0],
          filter: `hue-rotate(${tuning * 180}deg) contrast(${1 + tuning})`
        }}
        transition={{ duration: 0.1, repeat: Infinity, repeatType: "mirror" }}
        className={`absolute inset-0 opacity-40 bg-[url('/images/hero-damask.png')] bg-repeat bg-center mix-blend-screen transition-colors duration-500 ${glitch}`}
        style={{ backgroundSize: '600px' }}
      />

      <div className="container relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <span className="block font-mono text-lime-400 text-sm tracking-[0.5em] uppercase mb-4">
            Established 1685 // Broadcast 1994
          </span>
          <h1 className="text-[12vw] leading-[0.85] font-black uppercase text-white tracking-tighter text-shadow-glow">
            Pulse <span className="text-lime-400 font-serif italic normal-case">&</span> Petal
          </h1>
        </motion.div>

        <p className="max-w-2xl text-xl md:text-2xl font-serif text-zinc-300 italic mb-12 px-4">
          Artisan roasted beans from the heart of Spitalfields. High-fidelity caffeine for the nocturnal weavers of the E1 postcode.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl w-full px-4">
          <div className="text-left space-y-6">
            <h2 className="text-4xl font-bold text-white uppercase tracking-tighter italic">
              Tune into the roast.
            </h2>
            <p className="text-zinc-500 font-mono text-sm uppercase">
              Adjust the signal-knob to match your sensory frequency. From the delicate floral notes of a Huguenot silk robe to the distorted bass of a basement club.
            </p>
          </div>
          {/* Signal Knob will be placed here in Index.tsx for state sharing */}
        </div>
      </div>

      {/* Static Bars Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-lime-400/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-40 h-full border-l border-lime-400/10 hidden lg:block" />
      <div className="absolute top-1/4 -right-20 w-40 h-full border-r border-lime-400/10 hidden lg:block" />
    </section>
  );
};

export default DamaskHero;
