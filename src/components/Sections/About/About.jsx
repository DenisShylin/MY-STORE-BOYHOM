import { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define image sets with regular and Retina versions
  const images = [
    {
      regular: "/src/assets/products/abaut/imagegs 1.jpg",
      retina: "/src/assets/products/abaut/imagegs 1@2x.jpg", // 2x version
      alt: "TV Gaming Console",
    },
    {
      regular: "/src/assets/products/portable.jpg",
      retina: "/src/assets/products/portable.jpg", // 2x version
      alt: "Portable Gaming Console",
    },
    {
      regular: "/src/assets/products/controller.jpg",
      retina: "/src/assets/products/controller@2x.jpg", // 2x version
      alt: "Game Controller",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-decoration"></div>
      <div className="about-container">
        <div className="about-content">
          <p className="about-text">
            BOYHOM – це світ захоплюючих ігор для всієї родини! Ми створюємо
            якісні та доступні ігрові приставки, геймпади та аксесуари.
            Насолоджуйтесь яскравою графікою, зручним керуванням та безліччю
            ігор. BOYHOM – ваш надійний вибір для незабутніх вражень та веселого
            дозвілля. Долучайтесь до світу BOYHOM!
          </p>
        </div>

        <div className="about-carousel">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <picture>
                {/* Retina source */}
                <source
                  srcSet={image.retina}
                  media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
                />
                {/* Regular source */}
                <img
                  src={image.regular}
                  alt={image.alt}
                  loading="lazy"
                  className="carousel-image"
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
