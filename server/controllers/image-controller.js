import multer from "multer";
import grid from 'gridfs-stream'
import  mongoose  from "mongoose";
let gfs;
const conn=mongoose.connection;
conn.once('open', ()=>{
    gfs=grid(conn.db,mongoose.mongo);
    gfs.collection('fs');
})


const URL="http://localhost:8000"

export const uploadImage= (request,response) => {
    
    try
    {if(!request.file){
        response.status(404).json("Error File not Found");
    }

    const imageurl=`${URL}/file/${request.file.filename}`;
    console.log("fileuploaded");
    response.status(200).json(imageurl);}
    catch(error){
        response.status(500).json("Some error encounterd in uploadImage");
    }
}

export const getImage=async (request,response) =>{
    try{
         const file =  await gfs.files.findOne({filename:request.params.filename});
         const readStream =gfs.createReadStream(file.filename);
         readStream.pipe(response);
         console.log("file sent successfully");
    }
    catch(error){
        response.status(500).json("Error occured while getting image")
    }
}