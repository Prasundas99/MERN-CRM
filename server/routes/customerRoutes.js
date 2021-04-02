import express from "express";
import {
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "../controller/customerController.js";
const router = express.Router();

router.get("/", getCustomer);
router.post("/", createCustomer);
router.patch("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

export default router;