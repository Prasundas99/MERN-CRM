import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'

//Styles
import { useStyles } from '../../styles/Homestyle';

//React components
import { Link } from 'react-router-dom';


function Dashboard() {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h4" align='left'>Dashboard</Typography>

            <Grid container>

                <Grid item  lg={4}>
                    <Link to = "/ProductList" style={{ textDecoration: 'none' }}>
                        <Paper elevation={3} className={classes.Paper}>
                        Product
                        </Paper>
                    </Link>    
                </Grid>
                <Grid item  lg={1}></Grid>
                <Grid item  lg={4}>
                    <Link to = "/Allocation" style={{ textDecoration: 'none' }}>
                        <Paper elevation={3} className={classes.Paper}>
                            Customer-Product Allocation
                        </Paper>
                    </Link>    
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;
