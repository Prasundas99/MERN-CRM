import express from "express";
import morgan from "morgan";

//Router imports
import CustomerRouter from "./routes/customerRoutes.js";
import ProductRouter from "./routes/productRoute.js";
import AllocationRoutes from './routes/allocationRoutes.js';

import mongooseConnection from "./config/db.js";

import cors from "cors";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Mongodb connection
mongooseConnection();

//Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());


//Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/Customer",CustomerRouter);
app.use("/Product",ProductRouter);
app.use("/Allocation", AllocationRoutes);



//Server Listen
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});