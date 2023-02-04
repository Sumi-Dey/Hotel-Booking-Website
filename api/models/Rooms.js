import mongoose from 'mongoose';
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    maxPrice:{
        type:Number,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    maxPeople:{
        type:Number,
        require:true
    },
    photos:{
        type:[String]
    },
    roomNumbers:[{number: Number,unavailableDates:[{type:Date}]}],
    
})

export default mongoose.model("Room",RoomSchema);