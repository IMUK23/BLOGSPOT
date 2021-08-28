import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';

const storage=new GridFsStorage({
    url:"mongodb://Utkarsh:1234@blogspot-shard-00-00.3csty.mongodb.net:27017,blogspot-shard-00-01.3csty.mongodb.net:27017,blogspot-shard-00-02.3csty.mongodb.net:27017/Blogspot?ssl=true&replicaSet=atlas-h6vibv-shard-0&authSource=admin&retryWrites=true&w=majority",
    options:{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false},
    file: (request,file) =>{
        const match =["image/png","image/jpg","image/jpeg"];

        if(match.indexOf(file.memetype)==-1){
            return `${Date.now()}-blog ${file.originalname}`;
        }

        return {
            bucketName:"photos",
            filename: `${Date.now()}-blog ${file.originalname}`
        }
    }


});


export default multer({storage})