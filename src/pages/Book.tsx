const Book = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        {/* Logo at the top */}
        <img src="/images/ESTEEM.png" alt="Esteem Logo" className="w-100 h-100 mx-auto mb-4 rounded-full object-cover" />

        <h2 className="text-3xl font-bold text-gray-800">Book an Appointment</h2>
        <p className="text-gray-600 mt-2">We'd love to see you! Get in touch to schedule a session.</p>

        {/* Contact Details */}
        <div className="mt-6 space-y-2">
          <p className="text-gray-700"><strong>Email:</strong> contact@esteem.com</p>
          <p className="text-gray-700"><strong>Phone:</strong> (123) 456-7890</p>
        </div>

        {/* Booking Button */}
        <a href="https://booking.com" className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition">
          Book Now
        </a>
      </div>
    </div>
  );
};

export default Book;
