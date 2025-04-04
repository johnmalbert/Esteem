const Book = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-8 text-center">
        {/* Logo at the top */}
        <img
          src="/images/ESTEEM.png"
          alt="Esteem Logo"
          className="w-32 h-32 mx-auto mb-6 rounded-full object-cover"
        />

        <h2 className="text-4xl font-bold text-gray-800 mb-2">Book an Appointment</h2>
        <p className="text-gray-600 mb-6">
          We’d love to see you! Get in touch to schedule your next session.
        </p>

        {/* Contact Details */}
        <div className="text-gray-700 space-y-2 mb-8">
          <p><strong>Email:</strong> contact@esteem.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
        </div>

        {/* Booking Button */}
        <a
          href="https://booking.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default Book;
