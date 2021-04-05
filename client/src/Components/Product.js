import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

//Styles
import { useStyles } from "../styles/Homestyle";

//React components
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Web Development",
    "Full stck web development for all",
    "10th March 2020",
    "18%",
    "True"
  ),
  createData(
    "App Developmet",
    "Full stck web development for all",
    "10th March 2020",
    "18%",
    "True"
  ),
];

function Product({ products }) {
  const classes = useStyles();

  console.log(products);
  return (
    <div>
      <Typography variant="h4" align="left">
        Products
      </Typography>

      <Paper elevation={3} className={classes.PaperProducts}>
        <TableContainer>
          <Table
            className={classes.table}
            size="medium"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Name</b>
                </TableCell>
                <TableCell>
                  <b>Description</b>
                </TableCell>
                <TableCell>
                  <b>Price </b>
                </TableCell>
                <TableCell>
                  <b>Intro Date </b>
                </TableCell>
                <TableCell>
                  <b>GST</b>
                </TableCell>
                <TableCell>
                  <b>Inventory</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products &&
                products.map((row) => (
                  <TableRow key={row.product_name}>
                    <TableCell component="th" scope="row">
                      {row.product_name}
                    </TableCell>
                    <TableCell>{row.product_description}</TableCell>
                    <TableCell>{row.product_price}</TableCell>
                    <TableCell>{row.product_intro_date}</TableCell>
                    <TableCell>{row.GST}</TableCell>
                    <TableCell>
                      {row.product_inventry_flag.toString()}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default Product;
