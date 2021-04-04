//React imports
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

//Utils
import ScrollToTop from "./Components/ScrollToTop";

//Components imports
import Nav from "./Components/Navbar/Navbar";
import Home from "./screen/Home";
import ProductScreen from "./screen/ProductScreen";
import CustomerScreen from "./screen/CustomerProductScreen";
import AdminScreen from "./screen/admin/AdminScreen";
import AdminCustomer from "./screen/admin/AdminCustomer";
import AdminProduct from "./screen/admin/AdminProduct";
import NotFound from "./Components/NotFound";
import AdminAllocationScreen from "./screen/admin/AdminAllocationScreen";
import LogIn from "./screen/auth/Login";
import SignIn from "./screen/auth/SignIn";
import ForgetPass from "./screen/auth/ForgetPass";
import NewPass from "./screen/auth/NewPass";
import Customer from "./screen/Forms/Create/Customer";
import Product from "./screen/Forms/Create/Product";
import Allocation from "./screen/Forms/Create/Allocation";

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: '"Segoe UI "',
    },
    palette: {
      primary: { main: "#45289f" },
      secondary: { main: "#fffafa" },
    },
  });

  console.log(process.env.REACT_APP_API);

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Nav />
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/ProductList">
              <ProductScreen />
            </Route>

            <Route exact path="/Allocation">
              <CustomerScreen />
            </Route>

            <Route exact path="/Admin">
              <AdminScreen />
            </Route>
            <Route exact path="/AdminCustomer">
              <AdminCustomer />
            </Route>
            <Route exact path="/AdminProduct">
              <AdminProduct />
            </Route>

            <Route exact path="/AdminAllocation">
              <AdminAllocationScreen />
            </Route>

            <Route exact path="/LogIn">
              <LogIn />
            </Route>

            <Route exact path="/SignUp">
              <SignIn />
            </Route>
            <Route exact path="/ForgotPass">
              <ForgetPass />
            </Route>
            <Route exact path="/reset-password/:accessToken">
              <NewPass />
            </Route>
            <Route exact path="/NewCustomer">
              <Customer />
            </Route>
            <Route exact path="/NewProduct">
              <Product />
            </Route>
            <Route exact path="/NewAllocation">
              <Allocation />
            </Route>

            <Route path="" component={NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
