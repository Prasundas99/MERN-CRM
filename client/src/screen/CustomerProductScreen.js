//Components
import Dashboard from '../Components/home/Dashboard'
import Customer from '../Components/CustomerProduct';

//Styles
import { useStyles } from '../styles/Homestyle';



function ProductScreen() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Dashboard />

            <Customer />
                       
        </div>
    )
}

export default ProductScreen;
