import express from 'express'
import { postcontroller,getPostData,getOnePostData,updatePostData,deletecurrblog } from '../controllers/post-controller.js';
import {uploadImage,getImage} from '../controllers/image-controller.js';
import upload from '../util/upload.js';
import { addComment, deleteComment, editComment, getComments,getCommentData } from '../controllers/comment-controller.js';
import {createpostdata, findUser, updateUser} from '../controllers/like-controller.js'

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

/*routing for comments*/

router.post('/comments',addComment);
router.get('/postComments/:postid',getComments);
router.get('/getComment/:id',getCommentData);
router.post('/editcomment/:id',editComment);
router.delete('/deletecomment/:id',deleteComment);


/*routing for likes*/
router.post('/likes',createpostdata);
router.get('userlike/:id',findUser);
router.post('updatelike/:id',updateUser);


