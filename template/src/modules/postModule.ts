import {PostService} from "../services/postService";
import serviceTypes from "../models/serviceTypes";
import PostServiceImpl from "../implementation/postServiceImpl";
import {ContainerModule} from "inversify";

export default new ContainerModule((bind) => {
    bind<PostService>(serviceTypes.PostService).to(PostServiceImpl)
});