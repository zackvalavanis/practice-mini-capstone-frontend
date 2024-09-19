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


// Working on adding functionality to this React front end. Will need to install axios in order to link this to my rails backend. 
// Once that is done I need to test functionality to ensure everything is running smoothly. 
