import Hotel from "../models/Hotel.js";
import Rooms from "../models/Rooms.js";


export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Rooms(req.body);

    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, { 
                $push: { rooms: savedRoom._id },
             })
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedRoom)
    } catch (error) {
        next(error)
    }
}

export const updateRoom = async (req, res, next) => {
    try {
        const updateRooms = await Rooms.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateRooms)

    } catch (error) {
        next(error)
    }
}
export const updateRoomAvailability = async (req, res, next) => {
    try {
        await Rooms.updateOne({
            "roomNumbers._id":req.params.id
        },{
            $push:{"roomNumbers.$.unavailableDates": req.body.dates}
        })
        res.status(200).json("Room status has been updated.");
    } catch (error) {
        next(error)
    }
}
export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
        await Rooms.findByIdAndDelete(req.params.id,);

        try {
            await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id } })
        } catch (error) {
            next(error)
        }
        res.status(200).json("Room deleted")

    } catch (error) {
        next(error)
    }
}
export const getRoom = async (req, res, next) => {
    try {
        const room = await Rooms.findById(req.params.id)
        res.status(200).json(room)

    } catch (error) {
        next(error)
    }
}
export const getRooms = async (req, res, next) => {
    try {
        const rooms = await Rooms.find()
        res.status(200).json(rooms)

    } catch (error) {
        next(error)
    }
}