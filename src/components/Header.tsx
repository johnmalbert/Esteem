import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo + Site Name */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/ESTEEM.png" alt="Esteem Logo" className="w-20 h-20 rounded-full object-cover" />
        </Link>

        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-500">About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-500">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
