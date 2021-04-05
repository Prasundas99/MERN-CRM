//Components
import { useEffect, useState } from "react";
import Dashboard from "../Components/home/Dashboard";
import Product from "../Components/Product";

//Styles
import { useStyles } from "../styles/Homestyle";

// API connection
import { getProduct } from "./helper/products";

function ProductScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct().then((data) => {
      console.log(data);
      setProducts(data);
    });
  }, []);

  console.log(products);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Dashboard />

      <Product products={products} />
    </div>
  );
}

export default ProductScreen;
