//Components
import Dashboard from '../Components/home/Dashboard'


//Styles
import { useStyles } from '../styles/Homestyle';


function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Dashboard />
        </div>
    )
}

export default Home
