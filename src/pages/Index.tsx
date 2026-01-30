// Update this page (the content is just a fallback if you fail to update the page)

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      {/* This is a placeholder page. 
        It demonstrates how to use "shadcn-ui" components and Tailwind CSS.
        The AI interprets these imports as available UI primitives.
      */}
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Welcome to Your Project</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">
            Start building your application by editing <code className="bg-muted px-1 rounded">src/pages/Index.tsx</code>
          </p>
          
          <div className="space-y-2">
            <Input placeholder="Enter your project name..." />
            <Button className="w-full">
              Create Something Amazing
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { FrequencyList } from '@/components/FrequencyList';
import { SignalKnob } from '@/components/SignalKnob';

const Index = () => {
  const [signal, setSignal] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon-lime selection:text-black">
      <div className="glitch-overlay" />
      
      <nav className="fixed top-0 w-full z-40 p-6 flex justify-between items-center mix-blend-difference">
        <div className="font-black text-2xl uppercase tracking-tighter italic">
          P&P <span className="text-neon-lime">106.4</span>
        </div>
        <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-neon-lime transition-colors">Transmissions</a>
          <a href="#" className="hover:text-neon-lime transition-colors">The Weave</a>
          <a href="#" className="hover:text-neon-lime transition-colors">Archive</a>
        </div>
        <button className="bg-white text-black px-4 py-2 font-black uppercase text-sm hover:bg-neon-lime transition-all">
          Cart (0)
        </button>
      </nav>

      <main>
        <Hero />
        <ProductGrid />
        <FrequencyList />
      </main>

      <footer className="py-20 px-4 border-t-2 border-white/10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter opacity-10">
              Pulse & Petal
            </h2>
            <div className="font-mono text-sm space-y-1">
              <p>UNIT 42, BRICK LANE E1</p>
              <p>LONDON, UK</p>
              <p>EST. 1685 / 1994</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 font-mono text-xs uppercase">
            <a href="#" className="hover:text-neon-lime">Instagram / Mixcloud</a>
            <a href="#" className="hover:text-neon-lime">Privacy / Terms</a>
            <p className="mt-4 opacity-50">©2024 Signal & Silk Ltd.</p>
          </div>
        </div>
      </footer>

      <SignalKnob onTune={setSignal} />
    </div>
  );
};

export default Index;
