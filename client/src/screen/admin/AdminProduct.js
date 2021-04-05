import { useState, useEffect } from "react";
//Components
import Dashboard from "../../Components/admin/Admin";
import ProductEntry from "../../Components/admin/ProductEntry";

//Styles
import { useStyles } from "../../styles/Homestyle";

// API connection
import { getProduct } from "../helper/products";

function ProductScreen() {
  const classes = useStyles();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct().then((data) => {
      console.log(data);
      setProducts(data);
    });
  }, []);

  console.log(products);

  return (
    <div className={classes.root}>
      <Dashboard />

      <ProductEntry products={products} />
    </div>
  );
}

export default ProductScreen;
