import { Post } from "../models/post";

export interface PostService {
    /**
     * Returns a post for a given id.
     * @param postId 
     */
    get(postId: number): Promise<Post>
}