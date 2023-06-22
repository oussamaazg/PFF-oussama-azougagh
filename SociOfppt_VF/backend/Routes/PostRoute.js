import express from "express";
import { createPost, Comment,deletePost, getPost, getTimelinePosts, likePost, updatePost , getAllPosts} from "../Controllers/PostController.js";
const router = express.Router()

router.post('/', createPost)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete("/:id", deletePost)
router.put("/:id/like", likePost)

router.put("/comment/post", Comment)

router.get('/allPost/posts',getAllPosts)
router.get("/:id/timeline", getTimelinePosts)
export default router;
