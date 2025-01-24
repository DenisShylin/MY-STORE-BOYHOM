import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import About from "./components/Sections/About/About";
import Features from "./components/Sections/Features/Features";
import Categories from "./components/Sections/Categories/Categories";
import Reviews from "./components/Sections/Reviews/Reviews";
import Contact from "./components/Sections/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Products />
        <Categories />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
