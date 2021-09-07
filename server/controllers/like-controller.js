import likeData from "../schema/likeSchema.js";

export const createpostdata = async (request,response) => {
    try{
        const like= await new likeData(request.body);
        like.save();
        response.status(200).json("New post for like successfully created");
    }
    catch(error){
        response.status(500).json("Unable to create the post in likeSchema")
    }
}

export const findUser = async (request,response) =>  {
    try{
        const users= await likeData.find({postid:request.params.id});
        response.status(200).json(users.data);
    }
    catch(error){
        response.status(500).json("Error while fetching user data");
    }
}

export const updateUser = async (request,response) =>{
    try {
        await likeData.findByIdAndUpdate(request.params.id,{$set:request.body});
        response.status(200).json("User added/remove Successfully");
    }
    catch(error){
        response.status(500).json("Error while adding user data");
    }
}
