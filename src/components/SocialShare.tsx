import { Linkedin, Instagram } from 'lucide-react';

export const SocialShare = () => {
  const shareUrl = window.location.href;
  const shareText = "Check out this amazing friendship surprise on Knotify! 🎁💝";

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/in/himanshu-sahu-b65136276/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
  };

  const shareOnInstagram = () => {
    // Instagram doesn't have direct URL sharing, so we'll copy to clipboard with instructions
    navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    window.open('https://www.instagram.com/savvy.himanshu?igsh=MTZ0d3cyb3ppeHNtNQ==', '_blank');
  };

  return (
    <div className="flex gap-4 justify-center">
      <button
        onClick={shareOnLinkedIn}
        className="p-3 rounded-full bg-friendship-blue hover:bg-friendship-blue/80 transition-colors duration-200 group"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={shareOnInstagram}
        className="p-3 rounded-full bg-friendship-pink hover:bg-friendship-pink/80 transition-colors duration-200 group"
        aria-label="Share on Instagram"
      >
        <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};