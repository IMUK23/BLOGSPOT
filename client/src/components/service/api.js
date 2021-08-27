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




