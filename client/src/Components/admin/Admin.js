import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'

//Styles
import { useStyles } from '../../styles/Homestyle';

//React components
import { Link } from 'react-router-dom';


function AdminDashboard() {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h4" align='left'>Admin Dashboard</Typography>

            <Grid container>
                <Grid item  lg={4}>
                    <Link to = "/AdminCustomer" style={{ textDecoration: 'none' }}>
                        <Paper elevation={3} className={classes.Paper}>
                           Customer Entry
                        </Paper>
                    </Link>
                </Grid>
                <Grid item  lg={1}></Grid>
                <Grid item  lg={4}>
                    <Link to = "/AdminProduct" style={{ textDecoration: 'none' }}>
                        <Paper elevation={3} className={classes.Paper}>
                             Product Entry
                        </Paper>
                    </Link>    
                </Grid>
                <Grid item  lg={4}>
                    <Link to = "/AdminAllocation" style={{ textDecoration: 'none' }}>
                        <Paper elevation={3} className={classes.Paper}>
                             Customer-Product Entry
                        </Paper>
                    </Link>    
                </Grid>
            </Grid>
        </div>
    )
}

export default AdminDashboard;
