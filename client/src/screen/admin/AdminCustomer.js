import { useState, useEffect } from "react";

//Components
import Dashboard from "../../Components/admin/Admin";
import CustomerEntry from "../../Components/admin/CustomerEntry";

//Styles
import { useStyles } from "../../styles/Homestyle";

// API Connection
import { getCustomer } from "../helper/customer";

function ProductScreen() {
  const classes = useStyles();

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomer().then((data) => {
      console.log(data);
      setCustomers(data);
    });
  }, []);

  console.log(customers);

  return (
    <div className={classes.root}>
      <Dashboard />
      <CustomerEntry customers={customers} />
    </div>
  );
}

export default ProductScreen;
