import { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Невелика затримка перед анімацією
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay" />
      <div className="container mx-auto px-4">
        <div className="hero-content">
          <h1 className={`hero-title ${isVisible ? "fade-in-up" : ""}`}>
            BOYHOM
            <span className="hero-subtitle">поринь у всесвіт ігор</span>
          </h1>
          <div className={`hero-decoration ${isVisible ? "fade-in" : ""}`}>
            <div className="hero-line" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
