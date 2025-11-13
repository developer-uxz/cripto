import './App.css';
import 'animate.css';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Para from './components/Para';
import Features from './components/Features';
import RoadMap from './components/RoadMap';
import Teem from './components/Teem';
import Testimonials from './components/Testimonials';
import Faqs from './components/Faqs';
import BlogCard from './components/BlogCard';
import Support from './components/Support';
import Footer from './components/Footer';
import "animate.css";
// 🆕 Separate page components
function Home({ mode, toggleButton }) {
  return (
    <>
      <Para mode={mode} toggleButton={toggleButton} />
      <Features mode={mode} toggleButton={toggleButton} />
      <RoadMap mode={mode} toggleButton={toggleButton} />
      <Teem mode={mode} toggleButton={toggleButton} />
      <Testimonials mode={mode} toggleButton={toggleButton} />
      <Faqs mode={mode} toggleButton={toggleButton} />
      <BlogCard mode={mode} toggleButton={toggleButton} />
      <Support mode={mode} toggleButton={toggleButton} />
    </>
  );
}

function App() {
  const [mode, setMode] = useState("light");

  const toggleButton = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#111746";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar mode={mode} toggleButton={toggleButton} />

      {/* Main content area */}
      <div className={`${mode === "dark" ? "bg-[#0b1125] text-white" : "bg-white text-black"} pt-24`}>
        <Routes>
          {/* 🏠 Home route */}
          <Route path="/" element={<Home mode={mode} toggleButton={toggleButton} />} />
          {/* <Route path="/Para" element={<Para mode={mode} toggleButton={toggleButton} />} /> */}
          {/* 🔹 Other individual page routes */}
          <Route path="/features" element={<Features mode={mode} toggleButton={toggleButton} />} />
          <Route path="/roadmap" element={<RoadMap mode={mode} toggleButton={toggleButton} />} />
          <Route path="/teem" element={<Teem mode={mode} toggleButton={toggleButton} />} />
          <Route path="/testimonials" element={<Testimonials mode={mode} toggleButton={toggleButton} />} />
          <Route path="/faqs" element={<Faqs mode={mode} toggleButton={toggleButton} />} />
          <Route path="/blog" element={<BlogCard mode={mode} toggleButton={toggleButton} />} />
          <Route path="/support" element={<Support mode={mode} toggleButton={toggleButton} />} />
        </Routes>

        {/* Footer visible on all pages */}
        <Footer mode={mode} toggleButton={toggleButton} />
      </div>
    </Router>
  );
}

export default App;
