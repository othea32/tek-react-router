import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "./data";

function Product() {
  const { id } = useParams();
  const [currentVehicle, setCurrentVehicle] = useState(
    data.find((vehicle) => vehicle.id === Number(id))
  );

  useEffect(() => {
    setCurrentVehicle(data.find((vehicle) => vehicle.id === Number(id)));
  }, [id]);

  const currentIndex = data.indexOf(currentVehicle);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentVehicle(data[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + data.length) % data.length;
    setCurrentVehicle(data[prevIndex]);
  };

  if (!currentVehicle) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="app product-bg highlight">
      <Link to="/" className="button">
        Go home
      </Link>
      <Link to="/products" className="button">
        Go back to products
      </Link>

      <div className="card">
        <div className="image-container">
          <img src={currentVehicle.img} alt={currentVehicle.trim} />
        </div>
        <div className="details">
          <h2>
            {currentVehicle.make} {currentVehicle.model}: {currentVehicle.trim}
          </h2>
        </div>
        <div className="navigation">
          <Link
            style={{ color: "white" }}
            to={`/products/${
              data[(currentIndex - 1 + data.length) % data.length].id
            }`}
            onClick={handlePrevious}
          >
            &lt; Previous
          </Link>

          <Link
            style={{ color: "white" }}
            to={`/products/${data[(currentIndex + 1) % data.length].id}`}
            onClick={handleNext}
          >
            Next &gt;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
