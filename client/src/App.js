//React imports
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Utils
import ScrollToTop from './Components/ScrollToTop';

//Components imports
import Nav from "./Components/Navbar/Navbar";
import Home from "./screen/Home";
import ProductScreen from "./screen/ProductScreen";
import CustomerScreen from "./screen/CustomerProductScreen"
import AdminScreen from "./screen/admin/AdminScreen";
import AdminCustomer from './screen/admin/AdminCustomer';
import AdminProduct from './screen/admin/AdminProduct';
import NotFound from "./Components/NotFound";
import AdminAllocationScreen from './screen/admin/AdminAllocationScreen';
import LogIn from "./screen/auth/Login";
import SignIn from "./screen/auth/SignIn";


function App() {
  

  
  return (
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

            <Route path="" component={NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
  );
}

export default App;