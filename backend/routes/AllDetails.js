import express from "express";
import { getDetails , insertDetails } from '../controllers/details.js';



const router = express.Router();

router.get("/",getDetails);

router.post("/",insertDetails);

export default router;