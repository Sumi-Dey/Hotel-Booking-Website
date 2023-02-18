import mongoose from 'mongoose';
const { Schema } = mongoose;

const HotelCategory = new mongoose.Schema({
    category:{
        type:String,
        require:true
    },
    hotelCount:{
        type:Number
    },
    Photos:{
        type:[String] 
    }
});


export default mongoose.model("HotelCategory",HotelCategory);