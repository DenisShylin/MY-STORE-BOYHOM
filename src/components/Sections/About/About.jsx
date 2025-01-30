import { useState, useEffect } from "react";
import "./About.css";

// Імпортуємо зображення, піднімаємось на 3 рівні вгору
import R36S1x from "../../../assets/img/abaut/R36S_8_1x.jpg";
import R36S2x from "../../../assets/img/abaut/R36S_8_2x.jpg";
import Boy1x from "../../../assets/img/abaut/boy17_4_1x.jpg";
import Boy2x from "../../../assets/img/abaut/boy17_4_2x.jpg";
import X61x from "../../../assets/img/abaut/x6_6_1x.jpg";
import X62x from "../../../assets/img/abaut/x6_6_2x.jpg";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      regular: R36S1x,
      retina: R36S2x,
      alt: "TV Gaming Console",
    },
    {
      regular: Boy1x,
      retina: Boy2x,
      alt: "Portable Gaming Console",
    },
    {
      regular: X61x,
      retina: X62x,
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
