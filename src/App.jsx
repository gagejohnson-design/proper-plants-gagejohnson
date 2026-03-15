import { useState } from "react";
import Plantlist from "./components/plantlist";
import Cart from "./components/cart";
import plants from "./data";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    const existing = cart.find((item) => item.id === plant.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  }

  function updateQuantity(id, change) {
    const updateCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + change } : item,
      )
      .filter((item) => item.quantity > 0);
    setCart(updateCart);
  }

  return (
    <div>
      <h1>Proper Plants 🌱</h1>

      <Plantlist plants={plants} addToCart={addToCart} />

      <Cart cart={cart} updateQuantity={updateQuantity} />
    </div>
  );
}

export default App;
