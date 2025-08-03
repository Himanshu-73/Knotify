import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Heart, Gift } from 'lucide-react';

interface ReturnGiftDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ReturnGiftDialog = ({ open, onOpenChange }: ReturnGiftDialogProps) => {
  const [amount, setAmount] = useState('');

  const handleDonate = () => {
    // In a real app, this would integrate with a payment gateway
    alert(`Thank you for wanting to donate ₹${amount}! This is a demo, and no actual payment was processed. Best thing you can give me is a call whenever you are free, and if you still need to return, you know my number 😉💝`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-friendship-pink/20">
        <DialogHeader className="text-center">
          <DialogTitle className="font-playful text-2xl text-foreground flex items-center justify-center gap-2">
            <Gift className="w-6 h-6 text-gift-primary animate-pulse-heart" />
            Return Gift
            <Heart className="w-6 h-6 text-gift-primary animate-pulse-heart" />
          </DialogTitle>
          <DialogDescription className="font-playful text-muted-foreground">
            Want to send a return gift? 💝
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="text-center">
            <p className="font-playful text-sm text-muted-foreground mb-4">
              Show your appreciation with a small donation
            </p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="font-playful text-lg">₹</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="100"
                className="border border-border rounded-lg px-3 py-2 text-center font-playful w-24 bg-background"
                min="1"
              />
            </div>
            <div className="flex gap-2 justify-center mb-4">
              {[50, 100, 169, 420].map((preset) => (
                <button
                  key={preset}
                  onClick={() => setAmount(preset.toString())}
                  className="px-3 py-1 text-xs font-playful rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  ₹{preset}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 font-playful"
            >
              Maybe Later
            </Button>
            <Button
              onClick={handleDonate}
              disabled={!amount || parseInt(amount) < 1}
              className="flex-1 font-playful bg-gift-primary hover:bg-gift-primary/90"
            >
              Send Gift 💝
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};