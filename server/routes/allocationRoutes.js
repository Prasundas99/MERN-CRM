import express from "express";
import {
  getAllocation,
  createAllocation,
  updateAllocation,
  deleteAllocation,
} from "../controller/AllocationController.js";
const router = express.Router();

router.get("/", getAllocation);
router.post("/", createAllocation);
router.patch("/:id", updateAllocation);
router.delete("/:id", deleteAllocation);

export default router;