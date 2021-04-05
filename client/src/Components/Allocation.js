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

function Customer({ allocation }) {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4" align="left">
        Customers-Product Allocation
      </Typography>
      <br />
      <Paper elevation={3} className={classes.PaperCustomers}>
        <TableContainer>
          <Table
            className={classes.table}
            size="medium"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Customer Name</b>
                </TableCell>
                <TableCell>
                  {" "}
                  <b>Product Name</b>{" "}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allocation &&
                allocation.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                      {row.Customer.customer_name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.Product.product_name}
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

export default Customer;
