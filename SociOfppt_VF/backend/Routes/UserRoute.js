import express from "express";
import { deleteUser, followUser,getAllUsers, getUser, UnFollowUser, updateUser,FollowingUser,FollowersUser,searchUser } from "../Controllers/UserController.js";
import authMiddleWare  from '../middleware/AuthMiddleware.js'

const router = express.Router();

router.get('/:id', getUser)
router.get('/',getAllUsers)
router.put('/:id',authMiddleWare , updateUser)
router.delete('/:id',authMiddleWare , deleteUser)
router.put('/:id/follow',authMiddleWare , followUser)
router.put('/:id/unfollow',authMiddleWare , UnFollowUser)

router.get("/:id/following", FollowingUser)
router.get("/:id/followers", FollowersUser)

router.get('/search/getuser', searchUser)

export default router;