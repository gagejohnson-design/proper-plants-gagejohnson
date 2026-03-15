import Cartitems from "./cartitems";

function Cart({ cart, updateQuantity }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <Cartitems
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
          />
        ))
      )}
    </div>
  );
}

export default Cart;
