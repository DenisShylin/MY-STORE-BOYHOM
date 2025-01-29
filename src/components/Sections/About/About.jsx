import { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/src/assets/products/tv-console.jpg",
    "/src/assets/products/portable.jpg",
    "/src/assets/products/controller.jpg",
    // Добавьте пути к вашим изображениям
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Смена изображения каждые 5 секунд

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-decoration"></div>
      <div className="about-container">
        <div className="about-content">
          {/* <h2 className="about-title">Про нас</h2> */}
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
              <img
                src={image}
                alt={`Gaming console ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
