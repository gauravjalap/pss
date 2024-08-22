import Header from "./components/common/SocialMedia";
import NavBar from "./components/common/NavBar";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";
import Mission from "./pages/Mission";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import SocialMedia from "./components/common/SocialMedia";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <SocialMedia />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
