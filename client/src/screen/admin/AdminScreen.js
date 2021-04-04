import AdminDashboard from '../../Components/admin/Admin';
//Styles
import { useStyles } from '../../styles/Homestyle';
function AdminScreen() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AdminDashboard />
        
            
        </div>
    )
}

export default AdminScreen
