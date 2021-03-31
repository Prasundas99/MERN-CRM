//Components
import Dashboard from '../Components/home/Dashboard'
import Product from '../Components/Product'

//Styles
import { useStyles } from '../styles/Homestyle';


function ProductScreen() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Dashboard />

            <Product />
                       
        </div>
    )
}

export default ProductScreen;
