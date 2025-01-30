// src/components/Articles/Articles.jsx
import { useEffect, useState, useRef } from "react";
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
import "./Articles.css";

const Articles = () => {
  const [isVisible, setIsVisible] = useState(false);
  const accordionRef = useRef(null);

  const articles = {
    portable: [
      {
        title: "Як вибрати портативну консоль?",
        content: `
          <p>При виборі портативної консолі важливо звернути увагу на наступні характеристики:</p>
          <ul>
            <li>Тривалість роботи від батареї</li>
            <li>Роздільна здатність екрану</li>
            <li>Вага та розміри</li>
            <li>Доступність ігор</li>
          </ul>
          <p>Також варто врахувати...</p>
        `,
      },
      {
        title: "Догляд за портативною консоллю",
        content: `
          <p>Щоб ваша консоль служила довго, дотримуйтесь цих правил:</p>
          <ul>
            <li>Регулярно очищайте екран та корпус</li>
            <li>Використовуйте захисний чохол</li>
            <li>Уникайте перегріву пристрою</li>
          </ul>
        `,
      },
    ],
    tv: [
      {
        title: "Підключення консолі до телевізора",
        content: `
          <p>Правильне підключення консолі важливе для найкращої якості зображення:</p>
          <ul>
            <li>Використовуйте HDMI 2.1 для 4K/120Hz</li>
            <li>Налаштуйте HDR якщо доступно</li>
            <li>Виберіть правильний режим зображення на ТВ</li>
          </ul>
        `,
      },
    ],
    controllers: [
      {
        title: "Вибір контролера для гри",
        content: `
          <p>На що звернути увагу при виборі контролера:</p>
          <ul>
            <li>Ергономіка та вага</li>
            <li>Тип підключення (дротовий/бездротовий)</li>
            <li>Додаткові функції (вібрація, гіроскоп)</li>
          </ul>
        `,
      },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("articles");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible && !accordionRef.current) {
      accordionRef.current = new Accordion(".articles-accordion", {
        duration: 400,
        showMultiple: true,
        elementClass: "accordion-item",
        triggerClass: "accordion-header",
        panelClass: "accordion-panel",
        activeClass: "accordion-active",
        beforeOpen: (element) => {
          element.style.maxHeight = "none";
        },
      });
    }

    return () => {
      if (accordionRef.current) {
        accordionRef.current.destroy();
        accordionRef.current = null;
      }
    };
  }, [isVisible]);

  return (
    <section id="articles" className="articles">
      <div className="container mx-auto px-4">
        <h2 className={`articles-title ${isVisible ? "fade-in-up" : ""}`}>
          Корисна інформація
        </h2>

        <div className="articles-accordion">
          {Object.entries(articles).map(([category, items]) => (
            <div key={category} className="article-category">
              <h3 className="category-title">
                {category === "portable" && "Портативні консолі"}
                {category === "tv" && "Консолі для телевізора"}
                {category === "controllers" && "Контролери"}
              </h3>
              {items.map((article, index) => (
                <div key={index} className="accordion-item">
                  <div className="accordion-header">
                    <h4>{article.title}</h4>
                  </div>
                  <div className="accordion-panel">
                    <div
                      className="accordion-content"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
