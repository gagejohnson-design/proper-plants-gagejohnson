function cartitems({ item, updateQuantity }) {
  return (
    <div className="cart-item">
      <span>
        {item.image} {item.name}
      </span>

      <span>Quantity: {item.quantity}</span>

      <button onClick={() => updateQuantity(item.id, -1)}>-</button>

      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
    </div>
  );
}

export default cartitems;
