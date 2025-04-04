const images = [
    "/images/haircut1.jpg",
    "/images/haircut2.jpg",
    "/images/haircut3.jpg",
    "/images/haircut4.jpg",
    "/images/haircut5.jpg",
    "/images/haircut6.jpg",
    "/images/owner.jpg",
  ];
  
  const Gallery = () => {
    return (
      <div className="flex flex-wrap justify-center gap-2  p-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="w-60 h-60 border m-2 border-white/20 rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={src}
              alt={`Haircut ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default Gallery;
  