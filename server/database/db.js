import  mongoose from "mongoose";

const Connection =async () => {
    /*For connecting the application ->  mongoose.connect(url,object) object-> useNeuUrlParser:true,useUnifiedTopology:true,useFindAndModify:false*/
   try { const URL="mongodb://Utkarsh:1234@blogspot-shard-00-00.3csty.mongodb.net:27017,blogspot-shard-00-01.3csty.mongodb.net:27017,blogspot-shard-00-02.3csty.mongodb.net:27017/Blogspot?ssl=true&replicaSet=atlas-h6vibv-shard-0&authSource=admin&retryWrites=true&w=majority"

    await mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false});
    console.log('Database connected successfully');
}
   
    catch(error){
        console.log("Error is occured : ",error );
    }

}

export default Connection