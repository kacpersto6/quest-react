import React, { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [buildings, setBuildings] = useState([]);
  const [buildingDetails, setBuildingDetails] = useState({ name: "", area: "", price: "" });
  const [showPrices, setShowPrices] = useState({});

  const handleAddBuilding = () => {
    setShowForm(true);
  };

  const handleConfirm = () => {
    setBuildings([...buildings, buildingDetails]);
    setBuildingDetails({ name: "", area: "", price: "" });
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuildingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const togglePrice = (index) => {
    setShowPrices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f4f9",
        color: "#333",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <button
        onClick={handleAddBuilding}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          marginBottom: "20px",
        }}
      >
        Dodaj Budynek
      </button>

      {showForm && (
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <input
            type="text"
            name="name"
            placeholder="Nazwa Budynku"
            value={buildingDetails.name}
            onChange={handleChange}
            style={{
              margin: "10px",
              padding: "10px",
              fontSize: "14px",
              width: "200px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="text"
            name="area"
            placeholder="Powierzchnia (m²)"
            value={buildingDetails.area}
            onChange={handleChange}
            style={{
              margin: "10px",
              padding: "10px",
              fontSize: "14px",
              width: "200px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="text"
            name="price"
            placeholder="Cena (zł)"
            value={buildingDetails.price}
            onChange={handleChange}
            style={{
              margin: "10px",
              padding: "10px",
              fontSize: "14px",
              width: "200px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={handleConfirm}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Potwierdź
          </button>
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {buildings.map((building, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              width: "250px",
              textAlign: "center",
            }}
          >
            <h3 style={{ margin: "10px 0", color: "#4caf50" }}>{building.name}</h3>
            <p>Powierzchnia: {building.area} m²</p>
            <p>
              Cena:{" "}
              {showPrices[index] ? `${building.price} zł` : <span style={{ color: "#888" }}>Ukryta</span>}
            </p>
            <button
              onClick={() => togglePrice(index)}
              style={{
                padding: "10px 20px",
                backgroundColor: "#4caf50",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              {showPrices[index] ? "Zakryj Cenę" : "Ujawnij Cenę"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
