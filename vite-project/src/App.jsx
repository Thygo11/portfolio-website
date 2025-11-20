import Navigation from "./components/Navigation";
import Home from "./pages/home";
import About from "./pages/about";
import Projectpage from "./pages/projectpage";
import Projectdetail from "./pages/Projectdetail";
import Contact from "./pages/contact";
import Nopage from "./pages/Nopage";
import "./App.css";
import {BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projectpage" element={<Projectpage />} />
        <Route path="/projectdetail/:id" element={<Projectdetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Nopage />} />
        <Route path="/" element={<Projectpage />} />
        <Route path="/project/:id" element={<Projectdetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
