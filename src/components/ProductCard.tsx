import React from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  name: string;
  notes: string;
  intensity: number;
  image: string;
  price: string;
}

export const ProductCard = ({ name, notes, intensity, image, price }: ProductCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-zinc-900 border-2 border-white/10 overflow-hidden"
    >
      {/* Rave Flyer Overlay Effect */}
      <div className="absolute inset-0 bg-lime-400 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none z-10" />
      <div className="absolute top-0 right-0 p-4 z-20">
        <span className="bg-black text-white px-3 py-1 text-xl font-black italic tracking-tighter border-2 border-lime-400">
          {price}
        </span>
      </div>

      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
        />
      </div>

      <div className="p-6 relative">
        <div className="absolute -top-12 left-6 bg-white text-black px-4 py-2 text-2xl font-black uppercase tracking-widest leading-none shadow-xl transform -rotate-2">
          {name}
        </div>
        
        <div className="mt-4 space-y-4">
          <p className="font-serif italic text-zinc-400 text-lg border-b border-zinc-800 pb-4">
            {notes}
          </p>
          
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Roast Level</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-4 w-2 ${i < intensity ? 'bg-lime-400' : 'bg-zinc-800'}`}
                  />
                ))}
              </div>
            </div>
            <button className="px-6 py-2 bg-transparent border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-colors uppercase text-sm tracking-tighter">
              Secure Drop
            </button>
          </div>
        </div>
      </div>
      
      {/* Glitch Static Overlay */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20 bg-[url('https://raw.githubusercontent.com/Glyphor-Fuse/pulse-petal/main/public/images/static-texture.png')] group-hover:opacity-40" />
    </motion.div>
  );
};

export default ProductCard;
