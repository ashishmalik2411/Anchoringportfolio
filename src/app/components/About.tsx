import { Award, Users, Star, Sparkles } from "lucide-react";

export function About() {
  const stats = [
    { icon: Star, value: "100+", label: "Events Hosted" },
    { icon: Users, value: "5000+", label: "Audience Reached" },
    { icon: Award, value: "8+", label: "Years Experience" },
    { icon: Sparkles, value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">About Ashish</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your event isn't just a gathering; it's a moment people will talk about for years. 
            Ashish Malik doesn't just host events; he shapes experiences, commands attention, 
            and turns ordinary occasions into extraordinary memories.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-amber-500 transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-amber-500 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}