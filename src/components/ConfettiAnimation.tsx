import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
}

interface ConfettiAnimationProps {
  trigger: boolean;
  onComplete?: () => void;
}

export const ConfettiAnimation = ({ trigger, onComplete }: ConfettiAnimationProps) => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (trigger) {
      const colors = ['#FF6B98', '#FFE066', '#66E0FF', '#98FF98', '#FF9F66'];
      const pieces: ConfettiPiece[] = [];
      
      for (let i = 0; i < 50; i++) {
        pieces.push({
          id: i,
          x: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 0.5,
        });
      }
      
      setConfetti(pieces);
      
      const timer = setTimeout(() => {
        setConfetti([]);
        onComplete?.();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [trigger, onComplete]);

  if (!trigger || confetti.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 animate-confetti"
          style={{
            left: `${piece.x}%`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
          }}
        />
      ))}
    </div>
  );
};