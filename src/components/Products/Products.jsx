import "./Products.css";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Портативна консоль",
      price: "від 850 грн",
      image: "portable.jpg",
    },
    {
      id: 2,
      title: "Ігрова консоль для телевізора",
      price: "від 499 грн",
      image: "tv-console.jpg",
    },
    {
      id: 3,
      title: "Ігрові контролери",
      price: "від 460 грн",
      image: "controller.jpg",
    },
  ];

  return (
    <section className="products">
      <div className="container">
        <h2>Наші продукти</h2>
        <div className="products-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <img
                src={`/src/assets/products/${product.image}`}
                alt={product.title}
              />
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
