import "./Products.css";
// Імпорт звичайних зображень
import portableConsole from "../../assets/img/abaut/boy17_4_1x.jpg";
import tvConsole from "../../assets/img/abaut/R36S_8_1x.jpg";
import gameController from "../../assets/img/abaut/x6_6_1x.jpg";
// Імпорт Retina версій
import portableConsole2x from "../../assets/img/abaut/boy17_4_2x.jpg";
import tvConsole2x from "../../assets/img/abaut/R36S_8_2x.jpg";
import gameController2x from "../../assets/img/abaut/x6_6_2x.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Портативна консоль",
      price: "від 850 грн",
      image: portableConsole,
      image2x: portableConsole2x,
    },
    {
      id: 2,
      title: "Ігрова консоль для телевізора",
      price: "від 499 грн",
      image: tvConsole,
      image2x: tvConsole2x,
    },
    {
      id: 3,
      title: "Ігрові контролери",
      price: "від 460 грн",
      image: gameController,
      image2x: gameController2x,
    },
  ];

  return (
    <section className="products">
      <div className="container">
        <h2>Наші продукти</h2>
        <div className="products-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <picture>
                <source
                  srcSet={product.image2x}
                  media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
                />
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </picture>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <button>Купити</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
