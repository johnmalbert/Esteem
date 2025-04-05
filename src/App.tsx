import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
