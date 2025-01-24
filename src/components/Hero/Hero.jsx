import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>BOYHOM всесвіт ігор</h1>
        <div className="search">
          <input type="text" placeholder="Пошук..." />
          <button type="submit">Знайти</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
