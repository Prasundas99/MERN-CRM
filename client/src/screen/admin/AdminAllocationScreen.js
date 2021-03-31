//Components
import Dashboard from '../../Components/admin/Admin'
import AdminAllocation from '../../Components/admin/AdminAllocation';


//Styles
import { useStyles } from '../../styles/Homestyle';


function AdminAllocationScreen() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Dashboard />
            <AdminAllocation />
       </div>
    )
}

export default AdminAllocationScreen;
