//Components
import Dashboard from '../../Components/admin/Admin'
import ProductEntry from '../../Components/admin/ProductEntry'

//Styles
import { useStyles } from '../../styles/Homestyle';


function ProductScreen() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Dashboard />

            <ProductEntry />
                       
        </div>
    )
}

export default ProductScreen;
