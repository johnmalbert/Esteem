import { useState, useEffect, useRef } from "react";
import Gallery from "../components/Gallery";

const Home = () => {
  const [visible, setVisible] = useState({
    intro: false,
    gallery: false,
    whatToExpect: false,
    testimonials: false
  });
  const introRef = useRef(null);
  const galleryRef = useRef(null);
  const whatToExpectRef = useRef(null);
  const testimonialsRef = useRef(null);

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

    [introRef, galleryRef, whatToExpectRef, testimonialsRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Collin M.",
      text: "Ross has been my go-to since moving back to Seattle in 2021. Whenever I get a haircut from Ross, I know it's going to be high quality every time. Ross also does a great job helping his clients feel comfortable. He's a true professional and I would easily recommend his services to anyone looking.",
      rating: 5
    },
    {
      name: "Joel P.",
      text: "I've been going to Ross for the past four years, and he's hands down the best barber I've had. He's always professional, takes his time, and really pays attention to the little details that make a haircut look sharp and well-finished. It's rare to find someone who's this skilled and personable. I always leave feeling confident.",
      rating: 5
    },
    {
      name: "Brandon B.",
      text: "Ross is all around a 5-star dude. I've been getting my hair cut by him for 3 years and every interaction with him is genuine. He's an expert barber and has always done an amazing job with the cuts. I not only consider him a talented barber, but a good friend.",
      rating: 5
    }
  ];

  return (
    <div className="font-sans text-gray-900">
      {/* HERO */}
      <section
        className="w-full bg-[#FFFDEE] flex flex-col items-center justify-center text-center px-6 py-12"
      >
        <img
          src="/images/esteemlogo.jpg"
          alt="Esteem Logo"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg animate-fade-in"
        />
        <img
          src="/images/esteemicon.jpg"
          alt="Esteem Logo"
          className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-[225px] lg:max-w-[256px] animate-fade-in"
        />
        <h1 className="text-3xl sm:text-4xl text-center mb-12 font-sans font-bold text-[#A0826D]">
          Precision. Ritual. Esteem.
        </h1>
        <a
          href="https://square.site/book/1NCFYYAC5EK9Y/ross-henry-seattle-wa"
          className="inline-block mt-6 bg-[#2A65AB] text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition"
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
            The moment you walk in, you'll feel the warmth, the attention to detail,
            the hospitality that transforms a routine visit into self-care.
          </p>
          <p>
            We cut with intention. With passion. Because when you look good, you feel good —
            and that's what Esteem is all about.
          </p>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section
        ref={whatToExpectRef}
        data-section="whatToExpect"
        className={`transition-transform duration-1000 ${
          visible.whatToExpect ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } transform py-16 bg-[#FFFDEE]`}
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Ross the Barber Card */}
          <div className="max-w-md mx-auto mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="/images/Ross-56.jpg" 
              alt="Ross the barber"
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl text-center mb-12 font-sans font-bold text-[#2A65AB]">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/images/Ross2-62.jpg" 
                alt="Warm welcoming atmosphere"
                className="w-full h-[230px] object-cover"
              />
              <div className="p-6">
                <h4 className="font-roboto font-bold text-lg mb-2 text-[#2A65AB]">Personalization</h4>
                <p className="font-roboto text-gray-700">You'll be greeted with friendly energy the moment you arrive. This is your space to relax.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/images/Ross-3.jpg" 
                alt="One-chair shop"
                className="w-full h-[202px] object-cover"
              />
              <div className="p-6">
                <h4 className="font-roboto font-bold text-lg mb-2 text-[#2A65AB]">One-Chair Shop</h4>
                <p className="font-roboto text-gray-700">No chaos, no rushing—just a relaxed, quality experience.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/images/Ross-4.jpg" 
                alt="Personalized service"
                className="w-full h-auto"
              />
              <div className="p-6">
                <h4 className="font-roboto font-bold text-lg mb-2 text-[#2A65AB]">Appointment Only</h4>
                <p className="font-roboto text-gray-700">Book a time and it's yours—no walk-ins, no waiting, no rush. Just your personal slot.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/images/Ross-65.jpg" 
                alt="Leave feeling confident"
                className="w-full h-auto"
              />
              <div className="p-6">
                <h4 className="font-roboto font-bold text-lg mb-2 text-[#2A65AB]">Leave Feeling Esteem</h4>
                <p className="font-roboto text-gray-700">Walk out looking sharp, feeling confident, and leave with esteem.</p>
              </div>
            </div>
          </div>
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
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl text-center mb-12 font-sans font-bold text-[#2A65AB]">
            Gallery
          </h2>
          <Gallery />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        ref={testimonialsRef}
        data-section="testimonials"
        className={`transition-opacity duration-1000 ${
          visible.testimonials ? "opacity-100" : "opacity-0"
        } bg-white py-20 px-6`}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-center mb-12 font-sans font-bold text-[#2A65AB]">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#FFFDEE] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-900">— {testimonial.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps/place/Esteem+Barber/@47.6517522,-122.3510082,17z/data=!4m8!3m7!1s0x549015ee33a86785:0x667a20831c260ec!8m2!3d47.6517522!4d-122.3510082!9m1!1b1!16s%2Fg%2F11xfqgm_n1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#2A65AB] hover:text-gray-800 font-semibold transition"
            >
              <span>Read all reviews on Google</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
