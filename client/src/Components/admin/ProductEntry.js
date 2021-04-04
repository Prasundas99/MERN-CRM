import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


//Styles
import { useStyles } from '../../styles/Homestyle';
import { Link } from 'react-router-dom';

//React components
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Web Development', "Full stck web development for all", "10th March 2020",  "18%", "True", "Edit" , "Delete"),
    createData('App Developmet', "Full stck web development for all", "10th March 2020", "18%", "True" ,"Edit" , "Delete"),
  ];


function ProductEntry() {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h4" align='left'>Products</Typography>

            <Button variant="contained" color="primary">Add New</Button>
            <br /> <br />
            <Paper elevation={3} className={classes.PaperProducts}>
                   <TableContainer>
                        <Table className={classes.table} size='medium' aria-label="a dense table">
                            <TableHead>
                            <TableRow>
                                <TableCell> <b>Name</b> </TableCell>
                                <TableCell> <b>Description</b>  </TableCell>
                                <TableCell><b>Intro Date </b> </TableCell>
                                <TableCell><b>GST </b></TableCell>
                                <TableCell><b>Inventory </b></TableCell>
                                <TableCell><b>Edit</b></TableCell>
                                <TableCell><b>Delete</b> </TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.calories}</TableCell>
                                <TableCell>{row.fat}</TableCell>
                                <TableCell>{row.carbs}</TableCell>
                                <TableCell>{row.protein}</TableCell>
                                <TableCell><Link to='Update'>Edit</Link></TableCell>
                                <TableCell> <Link to='Delete  '>Delete</Link></TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            </Paper>
        </div>
    )
}

export default ProductEntry;
