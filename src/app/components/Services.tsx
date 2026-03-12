import { Building2, GraduationCap, Heart, PartyPopper } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Building2,
      title: "Corporate Events",
      description: "Professional anchoring for conferences, product launches, award ceremonies, and corporate gatherings. Ensuring your brand message is delivered with impact.",
      features: ["Conferences", "Product Launches", "Award Ceremonies", "Team Building Events"]
    },
    {
      icon: GraduationCap,
      title: "College Shows",
      description: "High-energy hosting for college fests, cultural events, talent shows, and competitions. Creating an electrifying atmosphere that resonates with youth.",
      features: ["Cultural Fests", "Talent Shows", "Competitions", "Orientation Programs"]
    },
    {
      icon: Heart,
      title: "Weddings",
      description: "Adding charm and elegance to your special day. From engagement ceremonies to reception parties, making every moment memorable for you and your guests.",
      features: ["Engagement Ceremonies", "Sangeet Nights", "Wedding Receptions", "Pre-Wedding Events"]
    },
    {
      icon: PartyPopper,
      title: "Other Functions",
      description: "Versatile hosting services for birthday parties, anniversaries, charity events, fashion shows, and more. Tailored entertainment for every occasion.",
      features: ["Birthday Celebrations", "Charity Galas", "Fashion Shows", "Community Events"]
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Services Offered</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional anchoring services tailored to make your event unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-amber-500/10 p-4 rounded-lg">
                    <Icon className="w-8 h-8 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="bg-gray-700/50 px-3 py-1 rounded-full text-sm text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
