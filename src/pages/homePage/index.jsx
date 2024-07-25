import Header from "../../components/header/";
import Slideshow from "../../components/slideShow";
import LightningProducts from "../../components/lightningProducts";
import Footer from "../../components/footer";
import Categories from "../../components/categories";
import Products from "../../components/products";

function HomePage() {
  return (
    <div>
      <div className="bg-gray-300">
        <Header />
        <Slideshow />
        <LightningProducts />
        <Categories />
        <Products />
        <Footer />
      </div>
    </div>
  );
}
export default HomePage;
