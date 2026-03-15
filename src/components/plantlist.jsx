import Plantbox from "./plantbox.jsx";

function Plantlist({ plants, addToCart }) {
  return (
    <div className="plant-box">
      {plants.map((plant) => (
        <Plantbox key={plant.id} plant={plant} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Plantlist;
