import express from "express";
import morgan from "morgan";

//Router imports
import CustomerRouter from "./routes/customerRoutes.js";
import ProductRouter from "./routes/productRoute.js";
import AllocationRoutes from './routes/allocationRoutes.js';


import mongooseConnection from "./config/db.js";

const app = express();

//Mongodb connection
mongooseConnection();

//Middleware
app.use(morgan("dev"));


//Routes
app.use("/Customer",CustomerRouter);
app.use("/Product",ProductRouter);
app.use("/Allocation", AllocationRoutes);





//Server Listen
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});