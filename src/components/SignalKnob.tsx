import { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Volume2, Radio } from 'lucide-react';

interface SignalKnobProps {
  onTune: (value: number) => void;
}

export const SignalKnob = ({ onTune }: SignalKnobProps) => {
  const [value, setValue] = useState([0]);

  const handleChange = (val: number[]) => {
    setValue(val);
    onTune(val[0]);
    document.documentElement.style.setProperty('--signal-distortion', `${val[0] / 5}px`);
    document.documentElement.style.setProperty('--signal-vibration', `${val[0] / 20}s`);
    document.documentElement.style.setProperty('--signal-glitch', val[0] > 70 ? 'block' : 'none');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 bg-black border-2 border-neon-lime p-4 flex flex-col items-center gap-4 shadow-[4px_4px_0px_0px_rgba(163,255,0,1)]">
      <div className="flex items-center gap-2 text-neon-lime font-mono text-xs uppercase tracking-tighter">
        <Radio className="w-4 h-4 animate-pulse" />
        <span>Signal Strength</span>
      </div>
      <div className="h-32 py-2">
        <Slider
          defaultValue={[0]}
          max={100}
          step={1}
          orientation="vertical"
          onValueChange={handleChange}
          className="h-full"
        />
      </div>
      <div className="text-neon-lime font-mono text-xl font-bold">
        {value[0].toString().padStart(3, '0')}
      </div>
    </div>
  );
};

export default SignalKnob;
