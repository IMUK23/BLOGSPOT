import express from 'express'
import { postcontroller,getPostData,getOnePostData,updatePostData,deletecurrblog } from '../controllers/post-controller.js';
import {uploadImage,getImage} from '../controllers/image-controller.js';
import upload from '../util/upload.js';
/*This file only deals with routing no business logic hence we have controller*/ 
export const router=express.Router();

/*As we used the post request in front end*/

router.post('/create',postcontroller);
router.get('/post',getPostData);
router.get('/display/:id',getOnePostData);
router.post('/update/:id',updatePostData);
router.delete('/delete/:id',deletecurrblog);

router.post('/file/upload',upload.single("file"),uploadImage)
router.get('/file/:filename',getImage)

