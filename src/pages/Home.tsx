import { useState, useEffect, useRef } from "react";
import Gallery from "../components/Gallery";

const Home = () => {
  const [visibleSections, setVisibleSections] = useState({
    logo: false,
    text: false,
    gallery: false,
    pricing: false,
  });

  const [showPricing, setShowPricing] = useState(false);

  const logoRef = useRef(null);
  const textRef = useRef(null);
  const galleryRef = useRef(null);
  const pricingRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = (entry.target as HTMLElement).dataset.section as keyof typeof visibleSections;
          setVisibleSections((prev) => ({ ...prev, [section]: true }));
        }
      });
    }, observerOptions);

    if (logoRef.current) observer.observe(logoRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);
    if (pricingRef.current) observer.observe(pricingRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-center mt-16 font-roboto">
      {/* LOGO */}
      <div
        ref={logoRef}
        data-section="logo"
        className={`transition-all duration-1000 delay-100 ${
          visibleSections.logo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transform`}
      >
        <img
          src="/images/ESTEEM.png"
          alt="Esteem Logo"
          className="mx-auto w-40 h-40 mb-6 drop-shadow-md"
        />
      </div>

      {/* TEXT SECTION */}
      <div
        ref={textRef}
        data-section="text"
        className={`transition-all duration-1000 delay-300 ${
          visibleSections.text ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transform`}
      >
        <div className="text-center mt-10 px-4 max-w-2xl mx-auto text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Esteem Salon</h2>
          <p>
            At Esteem, every haircut is a crafted experience, designed with precision,
            care, and a deep understanding that no two heads of hair are the same.
          </p>
          <p className="mt-4">
            From the moment you walk in, you’ll feel it: the warmth, the attention
            to detail, the hospitality that turns a routine haircut into a ritual of self-care.
          </p>
          <p className="mt-4">
            At Esteem, we take pride in what we do, approaching every cut with intention
            and care. Because when you look good, you feel good—and that’s what true esteem is all about.
          </p>

          <div className="mt-6 space-x-4">
            <a
              href="https://booking.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md transition"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <div
        ref={galleryRef}
        data-section="gallery"
        className={`transition-all duration-1000 delay-500 ${
          visibleSections.gallery ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transform mt-20`}
      >
        <Gallery />
      </div>

      {/* PRICING SECTION */}
      <div
        ref={pricingRef}
        data-section="pricing"
        className={`transition-all duration-1000 delay-700 ${
          visibleSections.pricing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transform mt-20`}
      >

        <button
          onClick={() => setShowPricing(!showPricing)}
          className="bg-gray-800 text-white px-4 py-2 rounded-md mb-6 hover:bg-gray-700 transition"
        >
          {showPricing ? "Hide Pricing" : "Show Pricing"}
        </button>

        {showPricing && (
          <div className="overflow-x-auto px-4">
            <table className="min-w-full text-sm text-left border border-gray-300 shadow-lg rounded-lg overflow-hidden bg-white">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-3">Service</th>
                  <th className="px-6 py-3">Duration</th>
                  <th className="px-6 py-3">Price</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  ["Haircut", "30 mins", "$65"],
                  ["Hair Coloring", "1 hour", "$60"],
                  ["Beard Trim", "15 mins", "$25"],
                  ["Full Styling", "1.5 hours", "$100"],
                ].map(([service, duration, price], i) => (
                  <tr
                    key={i}
                    className={`hover:bg-blue-50 transition ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                  >
                    <td className="px-6 py-3 font-medium">{service}</td>
                    <td className="px-6 py-3">{duration}</td>
                    <td className="px-6 py-3">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
