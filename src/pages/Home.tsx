import { useState, useEffect, useRef } from "react";
import Gallery from "../components/Gallery";
import { Link } from "react-router-dom";

const Home = () => {
  // State to track when elements become visible
  const [visibleSections, setVisibleSections] = useState({
    logo: false,
    text: false,
    gallery: false,
  });

  // Refs for each section
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.dataset.section]: true,
          }));
        }
      });
    }, observerOptions);

    if (logoRef.current) observer.observe(logoRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-center mt-16">
      {/* Logo Section */}
      <div
        ref={logoRef}
        data-section="logo"
        className={`transition-opacity duration-1000 ${visibleSections.logo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transform`}
      >
        <img src="/images/ESTEEM.png" alt="Esteem Logo" className="mx-auto w-40 h-40 mb-6" />
      </div>

      {/* Text Section */}
      <div
        ref={textRef}
        data-section="text"
        className={`transition-opacity duration-1000 ${visibleSections.text ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transform`}
      >
        <h2 className="text-3xl font-bold text-gray-800">Welcome to Esteem Salon</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          At Esteem, every haircut is a crafted experience, designed with precision, care, and a deep understanding that no two heads of hair are the same.
        </p>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          From the moment you walk in, you’ll feel it: the warmth, the attention to detail, the hospitality that turns a routine haircut into a ritual of self-care.
        </p>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          At Esteem, we take pride in what we do, approaching every cut with intention and care. Because when you look good, you feel good—and that’s what true esteem is all about.
        </p>
      </div>

      {/* Gallery Section */}
      <div
        ref={galleryRef}
        data-section="gallery"
        className={`transition-opacity duration-1000 ${visibleSections.gallery ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transform`}
      >
        <Gallery />
      </div>

      {/* Buttons */}
      <div className="mt-6 space-x-4">
        <a
          href="https://booking.com"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Book Now
        </a>
        <Link to="/about" className="text-blue-500 underline hover:text-blue-700">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Home;
