import CountHotel from "../models/CountHotel.js";
import Hotel from "../models/Hotel.js";
import HotelCategory from "../models/HotelCategory.js";
import Rooms from "../models/Rooms.js";

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotels = await newHotel.save()
        res.status(200).json(savedHotels)

    } catch (error) {
        next(error)
    }
}

export const updateHotel = async (req, res, next) => {
    try {
        const updateHotels = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateHotels)

    } catch (error) {
        next(error)
    }
}

export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id,)
        res.status(200).json("Hotel deleted")

    } catch (error) {
        next(error)
    }
}

export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)

    } catch (error) {
        next(error)
    }
}
export const cityHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)

    } catch (error) {
        next(error)
    }
}

export const getAllHotel = async (req, res, next) => {
    const { min, max, city, limit } = req.query
    try {
        const Hotels = await Hotel.find({ city, cheapestPrice: { $gt: min | 1, $lt: max | 1000000 } }).limit(limit);
        res.status(200).json(Hotels)


    } catch (error) {
        next(error)
    }
}
export const getByFeature = async (req, res, next) => {
    const { feature, limit } = req.query
    try {
        const Hotels = await Hotel.find({ feature }).limit(limit);
        res.status(200).json(Hotels)
    } catch (error) {
        next(error)
    }
}
export const getByCategory = async (req, res, next) => {
    const { category } = req.query;
    try {
        const Hotels = await Hotel.find({ category });
        res.status(200).json(Hotels)
    } catch (error) {
        next(error)
    }
}

export const countByCity = async (req, res, next) => {
    const {city} = req.query;
    try {
        const list = await Hotel.find({city});
        res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}

export const getHotelRooms = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        const list = await Promise.all(hotel.rooms.map(room => {
            return Rooms.findById(room)
        }))
        res.status(200).json(list)
    }
    catch (error) {
        next(error)
    }
}

export const createCity = async (req, res, next) => {
    const newCity = new CountHotel(req.body)
    try {
        const savedCity = await newCity.save()
        res.status(200).json(savedCity)

    } catch (error) {
        next(error)
    }
}

export const updateCityCount = async (req, res, next) => {
    // const id = req.params.id;
    const {city} = req.query;
        try {
            const cityCount = await Hotel.count({city})
            const Data = await CountHotel.findOneAndUpdate({city},{
                $set:{hotelCount:cityCount}
            })
            res.status(200).json(Data)
        } catch (error) {
            next(error)
        }
    }
export const getAllCity = async (req, res, next) => {
    const { limit } = req.query
        try {
            const allCities = await CountHotel.find().limit(limit)
            res.status(200).json(allCities)
    
        } catch (error) {
            next(error)
        }
    }
export const createCategory = async (req, res, next) => {
    const newCat = new HotelCategory(req.body)
    try {
        const savedCat = await newCat.save()
        res.status(200).json(savedCat)

    } catch (error) {
        next(error)
    }
}

export const getAllCategoryCity = async (req, res, next) => {
    const { limit } = req.query
        try {
            const allCat = await HotelCategory.find().limit(limit)
            res.status(200).json(allCat)
    
        } catch (error) {
            next(error)
        }
    }

