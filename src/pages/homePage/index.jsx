import Categories from "../../components/categories";
import Footer from "../../components/footer";
import Header from "../../components/header/";
import LightningProducts from "../../components/lightningProducts";
import Products from "../../components/products";
import Slideshow from "../../components/slideShow";

function HomePage() {
  return (
    <div className="bg-gray-300">
      <Header />
      <main>
        <Slideshow />
        <LightningProducts />
        <Categories />
        <Products />
      </main>
      <Footer />
    </div>
  );
}
export default HomePage;
