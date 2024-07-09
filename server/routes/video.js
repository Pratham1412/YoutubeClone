import express from "express";

import {uploadVideo,getAllvideos} from '../controllers/video.js'
import {likeController} from '../controllers/like.js'
import {likeVideoController,getAlllikeVideoController} from '../controllers/likeVideo.js'
import upload from '../Helpers/fileHelpers.js'

const routes=express.Router();

routes.post("/uploadVideo",upload.single("file"),uploadVideo)

routes.get("/getvideos",getAllvideos);

routes.patch('/like/:id',likeController)

routes.post('/likeVideo',likeVideoController)
routes.get('/getAlllikeVideo',getAlllikeVideoController)

export default routes;