import mongoose from 'mongoose';

const commentSchema= mongoose.Schema({
    postid:{
        type:String,
        required:true
    },
    commentauthor:{
        type:String,
        required:true,
    },
    commentdate:{
        type:Date,
        required:true
    },
    commentdata:{
        type:String,
        required:false
    }
})

const commentData=mongoose.model('commentData',commentSchema);

export default commentData;
