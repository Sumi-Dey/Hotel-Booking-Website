import express from 'express';
import { countByCity,createHotel, deleteHotel, getAllHotel, getByCity, getHotel, getHotelRooms, updateHotel } from '../cotrollers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post("/",verifyAdmin,createHotel)
//UPDATE
router.put("/:id",verifyAdmin,updateHotel)
//DELETE
router.delete("/:id",verifyAdmin, deleteHotel)
//GET
router.get("/find/:id", getHotel)
//GET ALL
router.get("/", getAllHotel);
//GetByCity
router.get("/getByCity",getByCity)
//CountByCity
router.get("/countByCity", countByCity)
//getRoom
router.get("/room/:id", getHotelRooms)

export default router;