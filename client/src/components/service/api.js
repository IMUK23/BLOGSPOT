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


export const getPostData=async() =>{
    try{
        const response= await axios.get(`${URL}/post`)
        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log("Cannot Fetch Data !! Some error occured");
    }
} 



