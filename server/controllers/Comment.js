import comment from "../models/comment.js";
import mongoose from "mongoose";

export const postComment=async(req,res)=>{
    const commentdata=req.body
    const postComment=new commentdata(commentdata)
    try {
        await postComment.save()
        res.status(200).json("posted the comment")
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getComment=async(req,res)=>{
    try{
        const commentsList=await comment.find()
        res.status(200).send(commentsList)
    }catch(error){
        res.status(400).json(error.message)
    }
}

export const deleteComment=async(req,res)=>{
    const {id:_id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Comment Unavailable..")
    }
    try {
        await comment.findByIdAndDelete(_id);
        res.status(200).json({message:"deleted comment"})
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
}

export const editComment=async(req,res)=>{
    const {id:_id}=req.params;
    const {commentbody}=req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(400).send("Comments unavailable..")
    }
    try {
        const updatecomment=await comment.findByIdAndUpdate(
            _id,
            {$set:{"commentbody":commentbody}}
        )
        res.status(200).json(updatecomment)
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
}
