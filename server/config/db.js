import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("useCreateIndex", true);

const connect = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log("Error while connecting to db:"+ err ));
};

export default connect;