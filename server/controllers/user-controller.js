import userData from "../schema/userSchema.js";

export const findUser = async (request,response) =>{
    try{
        let user=await userData.find({username:request.params.id});
        if(user.length===0){console.log("No data found"); user={fullname:"",username:"",Password:""} ;response.status(200).json(user); }
        else{response.status(200).json(user);
        console.log("User data found");}
    }
    catch(error){
        console.log("Error while finding user");
    }
}

export const addUser = async (request,response) =>{
    try{
        const user=await new userData(request.body);
        user.save();
        response.status(200).json("User added successfully");
        console.log("User added");
    }
    catch(error){
        console.log("Error while adding user")
    }
}
