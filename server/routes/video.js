import express from "express";
import {viewController} from '../controllers/views.js'
import {uploadVideo,getAllvideos} from '../controllers/video.js'
import {likeController} from '../controllers/like.js'
import {likeVideoController,getAlllikeVideoController} from '../controllers/likeVideo.js'
import { HistoryController,deleteHistoryController,getAllHistoryController } from "../controllers/History.js";
import upload from '../Helpers/fileHelpers.js'
import auth from "../middleware/auth.js"

const routes=express.Router();

routes.post("/uploadVideo",auth,upload.single("file"),uploadVideo)

routes.get("/getvideos",getAllvideos);

routes.patch('/like/:id',auth,likeController)
routes.patch('/view/:id',viewController)

routes.post('/likeVideo',likeVideoController)
routes.get('/getAlllikeVideo',getAlllikeVideoController)

routes.post('/History',auth,HistoryController)
routes.get('/getAllHistory',getAllHistoryController)
routes.delete('/deleteHistory/:userId',auth,deleteHistoryController)

export default routes;