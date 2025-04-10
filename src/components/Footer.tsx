const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-6 mt-10 space-y-4">
      <div>
        <p>
          Follow us on{" "}
          <a
            href="https://www.instagram.com/rosshenryhair/"
            className="underline text-blue-300 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
        <p className="mt-1">1201 Dexter Ave., Seattle, WA 98109</p>
        <a
          href="https://square.site/book/1NCFYYAC5EK9Y/ross-henry-seattle-wa"
          className="bg-[#2A65AB] text-white px-4 py-2 rounded-md inline-block mt-2 hover:bg-blue-600"
        >
          Book Now
        </a>
      </div>

      <div className="mt-6">
        <iframe
          title="Esteem Seattle"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.681685410202!2d-122.35100820000001!3d47.6517522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901500aac92b1f%3A0x66584f1d27d37534!2s600%20N%2036th%20St%20Suite%20209%2C%20Seattle%2C%20WA%2098103!5e0!3m2!1sen!2sus!4v1744322596834!5m2!1sen!2sus"
          width="100%"
          height="250"
          className="rounded-md border-0 w-full max-w-2xl mx-auto"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="div">
        <p className="text-sm text-gray-400 mt-4">&copy; 2025 Esteem. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
