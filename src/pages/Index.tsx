import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ConfettiAnimation } from '@/components/ConfettiAnimation';
import { SocialShare } from '@/components/SocialShare';
import { ReturnGiftDialog } from '@/components/ReturnGiftDialog';
import { Copy, Gift, Heart } from 'lucide-react';
import giftBoxImage from '@/assets/gift-box.png';
import friendshipBandImage from '@/assets/friendship-band.png';

const Index = () => {
  const [isUnwrapped, setIsUnwrapped] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showReturnGiftDialog, setShowReturnGiftDialog] = useState(false);
  const { toast } = useToast();

  const handleUnwrapGift = () => {
    if (!isUnwrapped) {
      setShowConfetti(true);
      setTimeout(() => {
        setIsUnwrapped(true);
      }, 500);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied! Go make someone smile. 😊",
        duration: 3000,
      });
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      toast({
        title: "Link copied! Go make someone smile. 😊",
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-background)' }}>
      <ConfettiAnimation trigger={showConfetti} onComplete={() => setShowConfetti(false)} />
      
      <div className="container mx-auto px-4 py-8 flex flex-col min-h-screen">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="font-playful text-4xl md:text-6xl font-bold text-foreground mb-4">
            Knotify
          </h1>
          {!isUnwrapped && (
            <p className="font-playful text-lg md:text-xl text-muted-foreground animate-fade-in-up">
              Click to unwrap your friendship surprise! 🎁
            </p>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center space-y-8">
          {!isUnwrapped ? (
            /* Gift Box */
            <div className="text-center animate-fade-in-up">
              <button
                onClick={handleUnwrapGift}
                className="transform transition-transform hover:scale-105 focus:scale-105 outline-none group"
                aria-label="Unwrap gift"
              >
                <img
                  src={giftBoxImage}
                  alt="Gift Box"
                  className="w-64 h-64 md:w-80 md:h-80 mx-auto animate-gift-bounce group-hover:animate-none group-hover:scale-110 transition-transform duration-300"
                />
              </button>
              <p className="font-playful text-sm text-muted-foreground mt-4 animate-pulse">
                ✨ Click the gift to unwrap ✨
              </p>
            </div>
          ) : (
            /* Unwrapped Content */
            <div className="text-center animate-fade-in-up space-y-6 max-w-2xl">
              <img
                src={friendshipBandImage}
                alt="Friendship Band"
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg border-4 border-white/50"
              />
              
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-friendship-pink/20 shadow-xl">
                <h2 className="font-playful text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-2">
                  <Heart className="w-6 h-6 text-gift-primary animate-pulse-heart" />
                  Happy Friendship Day!
                  <Heart className="w-6 h-6 text-gift-primary animate-pulse-heart" />
                </h2>
                <p className="font-playful text-lg text-muted-foreground leading-relaxed">
                  This band was tied with bytes, bonds, and bad jokes. 😄
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleCopyLink}
                  className="font-playful bg-gift-primary hover:bg-gift-primary/90 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transform transition-transform hover:scale-105"
                >
                  <Copy className="w-4 h-4" />
                  Send to a Friend
                </Button>
                
                <Button
                  onClick={() => setShowReturnGiftDialog(true)}
                  variant="outline"
                  className="font-playful border-gift-primary text-gift-primary hover:bg-gift-primary/10 px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transform transition-transform hover:scale-105"
                >
                  <Gift className="w-4 h-4" />
                  Return Gift
                </Button>
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="text-center space-y-4 pt-8">
          <SocialShare />
          <p className="font-playful text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 inline text-gift-primary animate-pulse-heart" /> on Friendship Day by{' '}
            <span className="font-semibold text-foreground">Himanshu Sahu</span>
          </p>
        </footer>
      </div>

      <ReturnGiftDialog 
        open={showReturnGiftDialog} 
        onOpenChange={setShowReturnGiftDialog}
      />
    </div>
  );
};

export default Index;
