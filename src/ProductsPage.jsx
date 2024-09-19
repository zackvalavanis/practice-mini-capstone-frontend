import { useState, useEffect } from 'react';
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import axios from 'axios'

export function ProductsPage() {
  const [products, setProducts] = useState([]);

  const getProductData = () => {
    axios.get("").then(response => {
      console.log(response.data);
      setProducts(response.data);
    });
  };
  return (
    <main>
      <ProductsNew />
      <ProductsIndex />
    </main>
  );
}
