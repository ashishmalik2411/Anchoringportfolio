import { useState } from "react";
import img1 from "figma:asset/fb8866dfd778c65916b46513c7f73f4c23ade954.png";
import img2 from "figma:asset/0c306cc46e9fc71040e7988ddf9b2d33fa046e14.png";
import img3 from "figma:asset/5a1da8f9790ae3258d48a281ec2b6a71acd14847.png";
import img4 from "figma:asset/3909e889923feb8671582512eaf37e5941aeedae.png";
import img5 from "figma:asset/84b5f677a654927100900183d233890e358b8c28.png";
import img6 from "figma:asset/1a8dc02fba8c6d740712e9b857b8b7ca6698173e.png";
import img7 from "figma:asset/a8b7b86aa5134cf4064b461c4dcfee7891c2ad46.png";
import img9 from "figma:asset/0c3aaf29e29094afd46aa7efb5e18a12a8adf35f.png";
import img10 from "figma:asset/9384826a504bb2ec5339e47f1367bde4c1141acc.png";
import { X } from "lucide-react";

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioImages = [
    {
      src: img1,
      alt: "Corporate Event Anchoring",
      category: "Corporate"
    },
    {
      src: img2,
      alt: "Event Hosting",
      category: "Corporate"
    },
    {
      src: img3,
      alt: "Stage Performance",
      category: "Corporate"
    },
    {
      src: img4,
      alt: "Live Anchoring",
      category: "Corporate"
    },
    {
      src: img5,
      alt: "College Event",
      category: "College Show"
    },
    {
      src: img6,
      alt: "Cultural Event",
      category: "Cultural"
    },
    {
      src: img7,
      alt: "Wedding Anchoring",
      category: "Wedding"
    },
    {
      src: img9,
      alt: "Corporate Event",
      category: "Corporate"
    },
    {
      src: img10,
      alt: "Corporate Event",
      category: "Corporate"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Portfolio</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Glimpses from events where energy meets excellence
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3] bg-gray-900"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 4 ? 'object-top' : ''
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {image.category}
                  </span>
                  <p className="text-white font-semibold">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img
            src={selectedImage}
            alt="Portfolio"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}