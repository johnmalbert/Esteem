import { useState, useEffect, useRef } from "react";
import Gallery from "../components/Gallery";

const Home = () => {
  const [visible, setVisible] = useState({
    intro: false,
    gallery: false,
    pricing: false,
  });
  const introRef = useRef(null);
  const galleryRef = useRef(null);
  const pricingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = (entry.target as HTMLElement).dataset.section;
            if (section) {
              setVisible((prev) => ({ ...prev, [section]: true }));
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    [introRef, galleryRef, pricingRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const pricingItems = [
    { title: "Haircut", duration: "30 mins", price: "$65" },
    { title: "Hair Coloring", duration: "1 hour", price: "$60" },
    { title: "Beard Trim", duration: "15 mins", price: "$25" },
    { title: "Full Styling", duration: "1.5 hours", price: "$100" },
  ];

  return (
    <div className="font-sans text-gray-900">
      {/* HERO */}
      <section className="relative h-screen bg-white flex flex-col items-center justify-center text-center px-6">
        <img
          src="/images/ESTEEM.png"
          alt="Esteem Logo"
          className="w-28 sm:w-40 mb-4 animate-fade-in drop-shadow-md"
        />
        <h1 className="text-4xl sm:text-5xl font-serif mb-6 max-w-xl leading-tight">
          Precision. Ritual. Esteem.
        </h1>
        <a
          href="https://booking.com"
          className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition"
        >
          Book Your Experience
        </a>
      </section>

      {/* INTRO */}
      <section
        ref={introRef}
        data-section="intro"
        className={`transition-opacity duration-1000 ${
          visible.intro ? "opacity-100" : "opacity-0"
        } bg-gray-50 py-20 px-6`}
      >
        <div className="max-w-3xl mx-auto text-center space-y-6 text-lg leading-relaxed">
          <p>
            At <strong>Esteem</strong>, every haircut is a crafted experience, designed with
            precision and care — because no two heads of hair are the same.
          </p>
          <p>
            The moment you walk in, you’ll feel the warmth, the attention to detail,
            the hospitality that transforms a routine visit into self-care.
          </p>
          <p>
            We cut with intention. With passion. Because when you look good, you feel good —
            and that’s what Esteem is all about.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section
        ref={galleryRef}
        data-section="gallery"
        className={`transition-transform duration-1000 ${
          visible.gallery ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } transform py-16 bg-white`}
      >
        <Gallery />
      </section>

      {/* PRICING */}
      <section
        ref={pricingRef}
        data-section="pricing"
        className={`transition-opacity duration-1000 ${
          visible.pricing ? "opacity-100" : "opacity-0"
        } py-20 px-6 bg-gray-100`}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingItems.map(({ title, duration, price }, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-medium mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{duration}</p>
                <p className="mt-4 text-lg font-semibold text-green-600">{price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
