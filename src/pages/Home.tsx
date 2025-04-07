import { useState, useEffect, useRef } from "react";
import Gallery from "../components/Gallery";

const Home = () => {
  const [visible, setVisible] = useState({
    intro: false,
    gallery: false
  });
  const introRef = useRef(null);
  const galleryRef = useRef(null);

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

    [introRef, galleryRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans text-gray-900">
      {/* HERO */}
      <section
        className="w-full bg-[#FFFDEE] flex flex-col items-center justify-center text-center px-6 py-12"
      >
        <img
          src="/images/ESTEEM.png"
          alt="Esteem Logo"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg animate-fade-in"
        />
        <h1 className="text-4xl sm:text-5xl font-serif text-gray-900 mt-6 leading-tight">
          Precision. Ritual. Esteem.
        </h1>
        <a
          href="https://square.site/book/1NCFYYAC5EK9Y/ross-henry-seattle-wa"
          className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition"
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
        } bg-[#FFFDEE] py-20 px-6`}
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
        } transform py-16 bg-[#FFFDEE]`}
      >
        <Gallery />
      </section>
    </div>
  );
};

export default Home;
