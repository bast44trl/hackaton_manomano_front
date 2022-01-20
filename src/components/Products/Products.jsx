import React, { useEffect, useState } from "react";
import backgroundLandingPage from "../../assets/backgrounds/landing-page.png";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products`)
      .then((rep) => rep.data)
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="products">
      <img
        className="products__background"
        src={backgroundLandingPage}
        alt="background de mano mano"
      />
      <div className="products__item recentlySeen">
        {products &&
          products.map((product) => {
            return (
              <ProductCard
                key={product.id_product}
                picture={product.picture}
                title={product.title}
                price={product.price}
                review={product.review}
              />
            );
          })}
      </div>
      <div className="products__item topSells">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
