import express from 'express'
import { postcontroller,getPostData } from '../controllers/post-controller.js';
/*This file only deals with routing no business logic hence we have controller*/ 
export const router=express.Router();

/*As we used the post request in front end*/

router.post('/create',postcontroller);
router.get('/post',getPostData);


