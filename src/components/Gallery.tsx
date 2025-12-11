const images = [
  "/images/haircut1.jpg",
  "/images/haircut2.jpg",
  "/images/haircut3.jpg",
  "/images/haircut5.jpg",
  "/images/haircut6.jpg",
  "/images/unnamed.jpg",
];

const Gallery = () => {
  return (
    <div className="px-4 py-12 text-text">
      <h2 className="text-3xl font-serif text-center mb-10">Gallery</h2>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            <img
              src={src}
              alt={`Haircut ${idx + 1}`}
              className="w-full h-auto object-cover brightness-90 hover:brightness-100 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
