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
    let username=request.query.username;
    let category=request.query.category;
    console.log(username+" "+ category);
    let data;
    try{
        
        if(username){
            data=await postdata.find({username:username});
            console.log("data sent with username");
        }else if(category){
            data=await postdata.find({category:category});
            console.log("data sent with category");
        }else{
            data=await postdata.find({});
            console.log("data sent without username");
        }
        response.status(200).json(data);
    }
    catch(error){
        response.status(500).json("Some error Occured while fetching data");
    }
}

export const getOnePostData =async (request,response) => {
    try{
        const data=await postdata.findById(request.params.id);
        response.status(200).json(data);
    }
    catch(error){
        response.status(500).json("Unable to fetch Data Some error occured");
    }
}

export const updatePostData= async (request,response) => {
    try{
        console.log(request.body);
        await postdata.findByIdAndUpdate(request.params.id,{$set:request.body});
        response.status(200).json("Updated Successfully");
    }
    catch(error){
        response.status(500).json("Error While Updating the data Please Try Again Later");
    }
}

export const deletecurrblog= async (request,response) =>{
    try{
        await postdata.findByIdAndDelete(request.params.id);
    }
    catch(error){
        response.status(500).json("Error while deleting the blog");
    }
}