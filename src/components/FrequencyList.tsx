import React from 'react';

export const FrequencyList = () => {
  return (
    <section className="py-20 px-4 bg-black overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="inline-block border-2 border-neon-lime text-neon-lime px-4 py-1 font-mono text-sm uppercase">
            Live Feed
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter italic">
            Spitalfields <br/> Signal <br/> Strength
          </h2>
          <p className="text-xl text-white/70 font-serif leading-relaxed">
            Our beans are roasted to the cadence of pirate radio classics. We weave flavor profiles with the same precision as 17th-century silk masters, but with the grit of a 90s illegal warehouse rave.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 border border-dashed border-white/20 animate-spin-slow rounded-full opacity-20 pointer-events-none"></div>
          <div className="bg-zinc-900 p-8 border-2 border-white/5 relative z-10">
            <div className="space-y-4 font-mono">
              {[
                { freq: '106.4', label: 'THE BLOOM', status: 'ACTIVE' },
                { freq: '98.2', label: 'DAMASK DUB', status: 'SIGNAL LOSS' },
                { freq: '101.5', label: 'WEAVERS WAY', status: 'ACTIVE' },
                { freq: '89.7', label: 'SILK STATIC', status: 'TUNING' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0">
                  <div className="flex items-baseline gap-4">
                    <span className="text-neon-lime text-2xl font-black">{item.freq}</span>
                    <span className="text-white text-sm uppercase">{item.label}</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 border ${item.status === 'ACTIVE' ? 'border-neon-lime text-neon-lime' : 'border-white/20 text-white/20'}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 grayscale contrast-125 hover:grayscale-0 transition-all cursor-crosshair">
            <img src="https://images.pexels.com/photos/7317291/pexels-photo-7317291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Studio Atmosphere" className="w-full border-2 border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequencyList;
