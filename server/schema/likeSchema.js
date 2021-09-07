import mongoose from 'mongoose';

const likeSchema = mongoose.Schema({
    postid:{
        type:String,
        required:true,
        unique:true
    },
    like:{
        type:Object,
        required:false,
        default:[]
    }
})


const likeData = mongoose.model('likeData',likeSchema);

export default likeData;