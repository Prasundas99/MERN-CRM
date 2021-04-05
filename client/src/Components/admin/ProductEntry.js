import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

//Styles
import { useStyles } from "../../styles/Homestyle";
import { Link } from "react-router-dom";

function ProductEntry({ products }) {
  const classes = useStyles();
  console.log(products);

  return (
    <div>
      <Typography variant="h4" align="left">
        Products
      </Typography>
      <Button variant="contained" color="primary">
        Add New
      </Button>
      <br /> <br />
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
                  {" "}
                  <b>Name</b>{" "}
                </TableCell>
                <TableCell>
                  {" "}
                  <b>Description</b>{" "}
                </TableCell>
                <TableCell>
                  <b>Intro Date </b>{" "}
                </TableCell>
                <TableCell>
                  <b>GST </b>
                </TableCell>
                <TableCell>
                  <b>Inventory </b>
                </TableCell>
                <TableCell>
                  <b>Edit</b>
                </TableCell>
                <TableCell>
                  <b>Delete</b>{" "}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products &&
                products.map((row) => (
                  <TableRow key={row._id}>
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
                    <TableCell>
                      <Link to="Delete  ">Delete</Link>
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

export default ProductEntry;
