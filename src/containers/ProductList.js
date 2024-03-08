import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";

const ProductList = () => {
  const products = useSelector((state) => state);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
    } catch (error) {
      console.log("Error", error.message);
      throw error;
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductList;
