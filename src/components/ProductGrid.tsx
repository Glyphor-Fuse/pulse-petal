import React from 'react';

const COFFEES = [
  {
    id: 1,
    name: 'Silk Static',
    origin: 'Ethiopia Yirgacheffe',
    notes: 'Bergamot / Lime / Static Grey',
    image: 'https://raw.githubusercontent.com/Glyphor-Fuse/pulse-petal/main/public/images/coffee-1.png',
    price: '£14.50'
  },
  {
    id: 2,
    name: 'Damask Dub',
    origin: 'Colombia Huila',
    notes: 'Dark Cocoa / Rose / Sub-Bass',
    image: 'https://images.pexels.com/photos/18500500/pexels-photo-18500500.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '£13.00'
  },
  {
    id: 3,
    name: 'Pirate Petal',
    origin: 'Kenya AA',
    notes: 'Hibiscus / Blackcurrant / FM Noise',
    image: 'https://images.pexels.com/photos/14050899/pexels-photo-14050899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: '£15.00'
  }
];

export const ProductGrid = () => {
  return (
    <section className="py-24 px-4 bg-static-grey/10 border-y-2 border-neon-lime/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 tracking-tighter signal-vibrate">
          Active Transmissions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {COFFEES.map((coffee) => (
            <div key={coffee.id} className="group relative">
              <div className="aspect-[3/4] overflow-hidden bg-zinc-900 border-2 border-white/10 group-hover:border-neon-lime transition-colors relative">
                <img 
                  src={coffee.image} 
                  alt={coffee.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-neon-lime/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity" />
                <div className="absolute top-4 right-4 bg-black text-neon-lime px-3 py-1 font-mono text-sm font-bold rotate-3">
                  {coffee.price}
                </div>
              </div>
              
              <div className="mt-6 space-y-2">
                <div className="flex justify-between items-end">
                  <h3 className="text-3xl font-black uppercase tracking-tighter">{coffee.name}</h3>
                </div>
                <p className="font-mono text-xs text-neon-lime uppercase tracking-widest">{coffee.origin}</p>
                <p className="font-serif italic text-white/60">{coffee.notes}</p>
                
                <button className="w-full mt-4 py-3 bg-white text-black font-bold uppercase tracking-tighter hover:bg-neon-lime transition-all transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
