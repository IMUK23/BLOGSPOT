import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    }
})


const userData = mongoose.model('userData',userSchema);

export default userData;