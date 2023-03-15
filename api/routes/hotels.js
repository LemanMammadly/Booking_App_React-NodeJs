import express from "express";
import { countbyCity, countbyType, createHotel, deleteHotel, getallHotel, getHotel, getHotelRooms, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js"; 
import {verifyAdmin} from "../utils/verifytoken.js"

const router = express.Router();

//CREATE
router.post("/",verifyAdmin, createHotel);
//UPDATE
router.put("/:id",verifyAdmin, updateHotel);
//DELETE
router.delete("/:id",verifyAdmin, deleteHotel);
//GET
router.get("/find/:id", getHotel);
//GET ALL
router.get("/", getallHotel);
router.get("/countbyCity", countbyCity);
router.get("/countbyType", countbyType);
router.get("/room/:id", getHotelRooms);

export default router;
