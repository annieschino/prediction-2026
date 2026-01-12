import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  // Using a placeholder audio file that is royalty free or a simple tone
  // In production, replace /assets/ambient.mp3 with actual file
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element only once
    audioRef.current = new Audio(`${import.meta.env.BASE_URL}assets/audio/music.mp3`); 
    audioRef.current.loop = true;
    audioRef.current.volume = 0.18;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const fadeTo = (target: number, ms = 800) => {
    const a = audioRef.current;
    if (!a) return;

    const steps = 20;
    const stepTime = ms / steps;
    const start = a.volume;
    const delta = (target - start) / steps;

    let i = 0;
    const timer = setInterval(() => {
      if (!audioRef.current) {
        clearInterval(timer);
        return;
      }
      i++;
      audioRef.current.volume = Math.max(
        0,
        Math.min(1, start + delta * i)
      );
      if (i >= steps) clearInterval(timer);
    }, stepTime);
  };

  const togglePlay = () => {
  if (!audioRef.current) return;

  if (isPlaying) {
    fadeTo(0, 800);
    setTimeout(() => {
      audioRef.current?.pause();
    }, 820);
  } else {
    audioRef.current.volume = 0;
    audioRef.current.play().catch(console.error);
    fadeTo(0.18, 900);
  }

  setIsPlaying(!isPlaying);
};

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="outline"
        size="default"
        className="rounded-full bg-white/80 backdrop-blur-sm shadow-md border-primary/10 text-primary hover:bg-white hover:scale-105 transition-all duration-300"
        onClick={togglePlay}
      >
        {isPlaying ? (
          <>
            <Volume2 className="h-4 w-4 mr-2" />
            <span className="font-sans text-xs tracking-wider uppercase font-medium">Pause Music</span>
          </>
        ) : (
          <>
            <VolumeX className="h-4 w-4 mr-2" />
            <span className="font-sans text-xs tracking-wider uppercase font-medium">Play Music</span>
          </>
        )}
      </Button>
    </div>
  );
}
