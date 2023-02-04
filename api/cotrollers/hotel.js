import Hotel from "../models/Hotel.js";
import Rooms from "../models/Rooms.js";

export const createHotel = async(req,res,next)=>{
    const newHotel = new Hotel(req.body)
    try {
        const savedHotels = await newHotel.save()
        res.status(200).json(savedHotels)
        
    } catch (error) {
        next(error)
    }
}

export const updateHotel = async(req,res,next)=>{
    try {
        const updateHotels = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateHotels)
        
    } catch (error) {
        next(error)
    }
}

export const deleteHotel = async(req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id,)
       res.status(200).json("Hotel deleted")
       
   } catch (error) {
       next(error)
   }
}

export const getHotel = async(req,res,next)=>{
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
        
    } catch (error) {
        next(error)
    }
}

export const getAllHotel = async(req,res,next)=>{
    const {min,max,city,limit} = req.query
    try {
        const Hotels = await Hotel.find({city,cheapestPrice:{$gt:min|1,$lt:max|1000000}}).limit(limit);
        res.status(200).json(Hotels)
        
        
    } catch (error) {
        next(error)
    }
}
export const getByCity = async(req,res,next)=>{
    const {feature,limit} = req.query
    try {
        const Hotels = await Hotel.find({feature}).limit(limit);
        res.status(200).json(Hotels)        
    } catch (error) {
        next(error)
    }
}


export const countByCity = async(req,res,next)=>{
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(cities.map(city=>{
           return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}

export const getHotelRooms = async (req,res,next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        const list = await Promise.all(hotel.rooms.map(room=>{
            return Rooms.findById(room)
        }))
        res.status(200).json(list)
    }
    catch (error){
        next(error)
    }
}