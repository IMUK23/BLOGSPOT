import React,{useState,useEffect,useRef} from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';




const likes= (props)=> {
    const [visible,changeVisible]=useState("");
    const [trigger,update] =useState(false);

    const [like,setLike]=useState("");
    useEffect(()=>{
    const fetchdata = async() =>{
        let data=await getLiketData(props.postid)
        setLike(data)
        if(data!=null){
            changeVisible(true);
        }
        else{
            changeVisible(false);
        }
    }
    fetchdata()
    },[trigger])


const addinglike = async () => {
    changeVisible(!visible);
    update(!trigger)
  
    data={[postid]:props.postid,[username]:'Utkarsh'}
    await addLike(props.postid,data);
}

const deletinglike =async () =>{}


    return (
        <>
         {
              (visible===false) && <FavoriteBorderIcon className={styles.like} onClick={()=>{updatelike()}} color="error"/>
            }
            {
              (visible===true) && <FavoriteIcon className={styles.like} onClick={()=>{updatelike()}}  color="error"/>
            }
        </>
            
    )
}

export default likes

