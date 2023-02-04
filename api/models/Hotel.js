import mongoose from 'mongoose';
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    distance:{
        type:String,
        require:true
    },
    photos:{
        type:[String]
    },
    desc:{
        type:String,
        require:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    reviews:{
        type:Number
    },
    rooms:{
        type:[String]
    },
    cheapestPrice:{
        type:Number,
        require:true
    },
    feature:{
        type:Boolean,
        default:false
    }
    
})

export default mongoose.model("Hotel",HotelSchema);