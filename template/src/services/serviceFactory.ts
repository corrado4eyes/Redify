import { PostService } from "./postService";
import { Container } from "inversify";
import serviceTypes from "../models/serviceTypes";


export interface ServiceFactory {
    getPostService(): PostService
}

export default class ServiceFactoryImpl implements ServiceFactory{
    constructor(private readonly container: Container) {}

    getPostService(): PostService {
        return this.container.get<PostService>(serviceTypes.PostService);
    }

}