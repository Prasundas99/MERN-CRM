import { useState, useEffect } from "react";
//Components
import Dashboard from "../../Components/admin/Admin";
import AdminAllocation from "../../Components/admin/AdminAllocation";

//Styles
import { useStyles } from "../../styles/Homestyle";

// API Connection
import { getAllocation } from "../helper/allocation";

function AdminAllocationScreen() {
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
      <AdminAllocation allocation={allocation} />
    </div>
  );
}

export default AdminAllocationScreen;
