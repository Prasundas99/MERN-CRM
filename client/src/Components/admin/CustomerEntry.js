import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

//Styles
import { useStyles } from "../../styles/Homestyle";

function CustomerEntry({ customers }) {
  const classes = useStyles();

  console.log(customers);

  return (
    <div>
      <Typography variant="h4" align="left">
        Customer Entry
      </Typography>
      <br />
      <Button variant="contained" color="primary">
        Add New
      </Button>
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
                  {" "}
                  <b>Name </b>{" "}
                </TableCell>
                <TableCell>
                  {" "}
                  <b>Address </b>{" "}
                </TableCell>
                <TableCell>
                  <b>Phone no.</b>
                </TableCell>
                <TableCell>
                  <b>GST</b>{" "}
                </TableCell>
                <TableCell>
                  <b>PAN </b>{" "}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers &&
                customers.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                      {row.customer_name}
                    </TableCell>
                    <TableCell>{row.customer_address}</TableCell>
                    <TableCell>{row.customer_phone}</TableCell>
                    <TableCell>{row.GST}</TableCell>
                    <TableCell>{row.PAN}</TableCell>
                    <TableCell>
                      <Link to="Update">Edit</Link>
                    </TableCell>
                    <TableCell>
                      {" "}
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

export default CustomerEntry;
