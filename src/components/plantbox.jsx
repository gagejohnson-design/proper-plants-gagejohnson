function Plantbox({ plant, addToCart }) {
  return (
    <div className="plant-box">
      <h2>
        {plant.image} {plant.name}
      </h2>

      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </div>
  );
}

export default Plantbox;
