import postdata from "../schema/postSchema.js";

export const postcontroller= async (request,response)=>{
    console.log(request.body);
    try{
        const post=await new postdata(request.body);
        post.save();
        response.status(200).json("BLog saved Successfully");

    }
    catch(error){
        response.status(500).json("Some error Occured");
    }
}


export const getPostData=async (request,response) =>{
    try{
        const data=await postdata.find({});
        response.status(200).json(data);
    }
    catch(error){
        response.status(500).json("Some error Occured while fetching data");
    }
}