import { PostService } from "../services/postService";
import { Post } from "../models/post";
import { injectable } from "inversify";

@injectable()
export default class PostServiceImpl implements PostService {
    baseUrlPath: string

    constructor() {
        this.baseUrlPath = "https://jsonplaceholder.typicode.com"
    }

    get(postId: number) {
        return fetch(`${this.baseUrlPath}/posts/${postId}`)
        .then((response) => response.json())
        .then((data: Post) => data)
        .catch((error: any) => error)
    }
    
}