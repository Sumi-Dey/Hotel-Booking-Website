import mongoose from 'mongoose';
const { Schema } = mongoose;

const CountHotelSchema = new mongoose.Schema({
    city:{
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


export default mongoose.model("CountHotel",CountHotelSchema);