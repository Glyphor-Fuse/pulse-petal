import React from 'react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-8 flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-white font-black text-2xl tracking-tighter leading-none">P&P</span>
        <span className="text-lime-400 font-mono text-[10px] tracking-widest uppercase">E1 BROADCST</span>
      </div>
      
      <div className="hidden md:flex gap-12 text-white font-mono text-xs uppercase tracking-[0.3em]">
        <a href="#" className="hover:text-lime-400 transition-colors">The Archives</a>
        <a href="#" className="hover:text-lime-400 transition-colors">Signal Boost</a>
        <a href="#" className="hover:text-lime-400 transition-colors">Warehouse Log</a>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-[2px] bg-white" />
        <button className="bg-white text-black px-4 py-1 font-black text-xs uppercase tracking-tighter hover:bg-lime-400 transition-colors">
          Shop Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
