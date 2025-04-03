import { useState, useEffect } from "react";
import Gallery from "../components/Gallery";
import { Link } from "react-router-dom";

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 500); // Delay to create a nice effect
  }, []);

  return (
    <div className="text-center mt-16">
      {/* Logo with fade-in effect */}
      <div className={`transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
        <img src="/images/ESTEEM.png" alt="Esteem Logo" className="mx-auto w-32 h-32 mb-6" />
      </div>

      <h2 className="text-2xl font-bold">Welcome to Esteem Salon</h2>
      <Gallery />
      <div className="mt-6">
        <p className="text-gray-600">
          At Esteem, every haircut is a crafted experience, designed with precision, care, and a deep understanding that no two heads of hair are the same.
        </p>
        <p className="text-gray-600 mt-4">
          From the moment you walk in, you’ll feel it: the warmth, the attention to detail, the hospitality that turns a routine haircut into a ritual of self-care.
        </p>
        <p className="text-gray-600 mt-4">
          At Esteem, we take pride in what we do, approaching every cut with intention and care. Because when you look good, you feel good—and that’s what true esteem is all about.
        </p>

        <div className="mt-4 space-x-4">
          <a href="https://booking.com" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Book Now
          </a>
          <Link to="/about" className="text-blue-500 underline">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
