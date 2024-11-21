import React, { useState } from "react";
import "../styles/App.css";

function FoodList() {
  const [foods, setFoods] = useState([]);
  const [itemName, setItemName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [spicinessLevel, setSpicinessLevel] = useState("");
  const [isFirstCardEnabled, setIsFirstCardEnabled] = useState(false);
  const [isSecondCardEnabled, setIsSecondCardEnabled] = useState(false);
  const [isFormEnabled, setIsFormEnabled] = useState(false);
  const addItem = () => {
    setFoods((prev) => [...prev, { itemName, foodType, spicinessLevel }]);
    setFoodType("");
    setItemName("");
    setSpicinessLevel("");
    setIsFirstCardEnabled(false);
    setIsSecondCardEnabled(false);
    setIsFormEnabled(false);
  };

  const deleteItem = (index) => {
    const newFood = foods.filter((food, idx) => idx !== index);
    setFoods([...newFood]);
  };

  return (
    <>
      <div className="container">
        <h1>Food Items List</h1>
        <button
          onClick={() => {
            setIsFirstCardEnabled(true);
            setIsSecondCardEnabled(true);
          }}
        >
          Add Food
        </button>
        {isFirstCardEnabled && (
          <div className="card-container">
            <>
              <h2>Item Name:</h2>
              <input
                name="itemName"
                type="text"
                disabled={!isFirstCardEnabled}
                onChange={(e) => setItemName(e.target.value)}
              />
              <h2>Food Type:</h2>
              <input
                name="foodType"
                type="text"
                disabled={!isFirstCardEnabled}
                onChange={(e) => setFoodType(e.target.value)}
              />
              <div className={`card`}>
                <form onClick={() => setIsFormEnabled(true)}>
                  <h2>Spiciness Level:</h2>
                  <input
                    name="spicinessLevel"
                    type="text"
                    disabled={!isFormEnabled}
                    style={{ opacity: isFormEnabled ? 1 : 0.5 }}
                    onChange={(e) => setSpicinessLevel(e.target.value)}
                  />
                </form>
              </div>
            </>
          </div>
        )}
        {isFirstCardEnabled && (
          <div className={`card ${isSecondCardEnabled ? "" : "disabled"}`}>
            <button onClick={addItem} disabled={!isSecondCardEnabled}>
              Save
            </button>
          </div>
        )}

        <ul className="list">
          {foods.map((food, index) => {
            return (
              <li key={index}>
                {food.itemName} ({food.foodType}) - Spiciness Level:{" "}
                {food.spicinessLevel}
                <button onClick={() => deleteItem(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default FoodList;
