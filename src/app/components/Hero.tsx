import { Mic2, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "figma:asset/3909e889923feb8671582512eaf37e5941aeedae.png";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Ashish Malik anchoring" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Mic2 className="w-16 h-16 text-amber-500" />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Ashish Malik
        </h1>
        <p className="text-2xl md:text-3xl text-amber-500 mb-8 font-light tracking-wide">
          Professional Anchor & Emcee
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Bringing energy, charisma, and professionalism to every event. 
          Making moments memorable, one stage at a time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-amber-500/50 transition-all"
            onClick={scrollToContact}
          >
            Book Now
          </Button>
          <Button 
            size="lg" 
            className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold shadow-lg transition-all"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Portfolio
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
}