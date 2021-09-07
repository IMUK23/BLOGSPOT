import mongoose from 'mongoose';

const postschema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:false
    },
    date:{
        type:Date
    },
    username:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false
    },
    liked:{
        type:Object,
        required:false,
        default:[]
    }
})

const postdata=mongoose.model('postdata',postschema);

export default postdata