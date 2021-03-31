import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


//Styles
import { useStyles } from '../styles/Homestyle';

//React components
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Web Development', "Full stck web development for all", "10th March 2020",  "18%", "True"),
    createData('App Developmet', "Full stck web development for all", "10th March 2020", "18%", "True"),
  ];


function Customer() {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h4" align='left'>Customers-Product Allocation</Typography>
        <br />
            <Paper elevation={3} className={classes.PaperCustomers}>
                   <TableContainer>
                        <Table className={classes.table} size='medium' aria-label="a dense table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Product</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                   
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            </Paper>
        </div>
    )
}

export default Customer;
