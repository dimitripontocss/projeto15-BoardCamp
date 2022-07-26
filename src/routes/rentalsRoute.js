import { Router } from "express";
import { deleteRental, getRentals, postRental, returnRental } from "../controllers/rentalsController.js";
import { validateNewRental, validateRental } from "../middlewares/validateRentals.js"

const router = Router();

router.get("/rentals", getRentals);
router.post("/rentals", validateNewRental, postRental);
router.post("/rentals/:id/return", validateRental, returnRental);
router.delete("/rentals/:id", validateRental, deleteRental);

export default router;