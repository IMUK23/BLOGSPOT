import axios from 'axios';

const URL="http://localhost:8000";

export const sendData= async(data) =>{
    try{
        return await axios.post(`${URL}/create`,data);
    }
    catch(error){
        console.log("Oops Found Some error in sending data");
    }
}


export const getPostData=async(param) =>{
    try{
        const response= await axios.get(`${URL}/post${param}`)
        return response.data;
    }
    catch(error){
        console.log("Cannot Fetch Data !! Some error occured");
    }
}

export const getOnePostData= async (id) =>{
        const response =await axios.get(`${URL}/display/${id}`)
        console.log(response.data);
        return response.data;
}

export const updatePostData= async (id,post) =>{
    try{
        console.log(post);
        return await axios.post(`${URL}/update/${id}`,post);
        
    }
    catch(error){
        console.log("Error while sending updated data");
    }
        
}

export const deletecurrblog = async(id) =>{
    try{
        await axios.delete(`${URL}/delete/${id}`);
    }
    catch(error){
        console.log("Some error is encoutered while deleting the data");
    }
}


export const uploadImage= async(data) => {
    try{
        return await axios.post(`${URL}/file/upload`,data);
    }
    catch(error){
        console.log("Some error is encountered while fetching through api");
    }
}

/*Creating Comments API*/

export const sendComment = async(data) =>{
    try{
        return await axios.post(`${URL}/comments`,data);
    }
    catch(error){
        console.log("Oops Found Some error in sending data");
    }
}

export const getComments= async(id) =>{
    try{
        const comments= await axios.get(`${URL}/postComments/${id}`);
        return comments.data;
    }
    catch(error){
        console.log("Some error is encountered while fetching Comments through api");
    }
}

export const getCommentData =async(id) =>{
    try{
        const comment = await axios.get(`${URL}/getComment/${id}`);
        console.log("Data got by api : "+comment);
        return comment.data;
    }
    catch(error){
        console.log("Some error is encountered while fetching current Comments through api");
    }
}

export const editComment= async(id,comment) => {
    try{
        await axios.post(`${URL}/editComment/${id}`,comment);
    }
    catch(error){
        console.log("Some error is encountered while editing Comments through api");
    }
}

export const deleteComment= async(id) =>{
    try{
        console.log("Deleting comment");
        await axios.delete(`${URL}/deletecomment/${id}`);
    }
    catch(error){
        console.log("Some error is encountered while deleting Comments through api");
    }
}

/*Likes functions*/

export const addlike= async(id,data) =>{
    try{
        console.log("Creating like model for post");
        await axios.post(`${URL}/addlike/${id}`,data);
    }
    catch(error){
        console.log("Some error is encountered while creating likes model through api");
    }
}


export const removelike=async(id) =>{
    try{
        await axios.delete(`${URL}/deletelike/${id}`)
    }
    catch(error){
        console.log("Error while removing like");
    }
}


/*User Data function*/

export const addUserData = async(data)=>{
    try{
        await axios.post(`${URL}/user`,data);
    }
    catch(error){
        console.log("Error while adding userdata through API");
    }
}


export const getuserData = async(data) => {
    try {
        const returndata= await axios.get(`${URL}/finduser/${data}`);
        return returndata;
    }
    catch(error){
        console.log("Front End userdata fetch failure")
    }
}
