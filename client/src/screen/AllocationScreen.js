import { useEffect, useState } from "react";

//Components
import Dashboard from "../Components/home/Dashboard";
import Allocation from "../Components/Allocation";

//Styles
import { useStyles } from "../styles/Homestyle";

// API connection
import { getAllocation } from "./helper/allocation";

function ProductScreen() {
  const classes = useStyles();
  const [allocation, setAllocation] = useState([]);

  useEffect(() => {
    getAllocation().then((data) => {
      console.log(data);
      setAllocation(data);
    });
  }, []);

  console.log(allocation);

  return (
    <div className={classes.root}>
      <Dashboard />
      <Allocation allocation={allocation} />
    </div>
  );
}

export default ProductScreen;
