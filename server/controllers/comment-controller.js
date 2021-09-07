import commentData from "../schema/commentSchema.js";

export const addComment = async (request,response) =>{
    console.log(request.body);
    try{
        const comment= await new commentData(request.body);
        comment.save();
        response.status(200).json("Comment Added Successfully");
        console.log("Comment Added Successfully");
    }
    catch(error){
        response.status(500).json("Some error occured while adding the data");
    }
}

export const getComments = async (request,response) =>{
    try{
        const comments=await commentData.find({postid:request.params.postid});
        response.status(200).json(comments);
        console.log("comment array is sent");
    }
    catch(error){
        response.status(500).json("Error occured while fetching comments");
        console.log("Cant fetch comments");
    }
}

export const getCommentData = async (request,response) =>{
    try{
        const comment=await commentData.findById(request.params.id);
        response.status(200).json(comment);
        console.log("Comment info is sent");
    }
    catch(error){
        response.status(500).json("Error occured while fetching comment info");
        console.log("Cant fetch comments");
    }
}


export const editComment = async(request,response) =>{
    console.log(request.body);
    try{
        await commentData.findByIdAndUpdate(request.params.id,{$set:request.body});
        response.status(200).json("Comment Updated Successfully");
    }
    catch(error){
        response.status(500).json("Error while editing comment");
    }
}

export const deleteComment =async (request,response) =>{
    try{
        await commentData.findByIdAndDelete(request.params.id);
        console.log("comment deleted");
    }
    catch(error){
        response.status(500).json("Error while deleting the comment");
    }
}