import { CartProvider } from "./context/cartContext";
import { FavoriteProvider } from "./context/favoriteContext";
import Routes from "./routes";

function App() {
  return (
    <CartProvider>
      <FavoriteProvider>
        <Routes />
      </FavoriteProvider>
    </CartProvider>
  );
}

export default App;
