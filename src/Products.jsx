import { useState } from "react";

import data from "./data";
import { Link } from "react-router-dom";

function Products() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="app">
      <div className="grid-container">
        {data.map((vehicle, index) => (
          <Link
            to={`/products/${vehicle.id}`}
            key={vehicle.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`card ${index === hoveredIndex ? "active" : ""}`}>
              <div className="image-container">
                <img src={vehicle.img} alt={vehicle.trim} />
              </div>
              <div className="details">
                <h2>
                  {vehicle.make} {vehicle.model}
                </h2>
                <h3>{vehicle.trim}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <br />
      <Link to="/" className="button">
        Go Home
      </Link>
    </div>
  );
}

export default Products
