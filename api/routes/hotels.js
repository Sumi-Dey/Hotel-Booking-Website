import express from 'express';
import { cityHotel,countByCity,createCategory,createCity,createHotel, deleteHotel, getAllCategoryCity, getAllCity, getAllHotel, getByCategory, getByFeature, getHotel, getHotelRooms, updateCityCount, updateHotel } from '../cotrollers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//UpdateCityCount
router.put("/updateCityCount", updateCityCount)
//CREATE
router.post("/",verifyAdmin,createHotel)
//UPDATE
router.put("/:id",verifyAdmin,updateHotel)
//DELETE
router.delete("/:id",verifyAdmin, deleteHotel)
//GET
router.get("/find/:id", getHotel)
//GET
router.get("/cityhotel/:id", cityHotel)
//GET ALL
router.get("/", getAllHotel);
//GetByCity
router.get("/getByFeature",getByFeature)
//GetByCategory
router.get("/getByCategory",getByCategory)
//CountByCity
router.get("/countByCity", countByCity)
//CreateCity
router.post("/createCity", createCity)
//GetAllCity
router.get("/getAllCity",getAllCity)
//getRoom
router.get("/room/:id", getHotelRooms)
//CreateCat
router.post("/createCategory", createCategory)
//GetAllCat
router.get("/getAllCategoryCity",getAllCategoryCity)

export default router;