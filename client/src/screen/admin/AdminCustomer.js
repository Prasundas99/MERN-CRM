//Components
import Dashboard from '../../Components/admin/Admin'
import CustomerEntry from '../../Components/admin/CustomerEntry'

//Styles
import { useStyles } from '../../styles/Homestyle';


function ProductScreen() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Dashboard />
            <CustomerEntry />
       </div>
    )
}

export default ProductScreen;
