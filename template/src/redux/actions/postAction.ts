import { Action, Dispatch } from "redux";
import { Post } from "../../models/post";
import { RootState } from "../reducers/mainReducer";
import ServiceFactoryImpl, { ServiceFactory } from "../../services/serviceFactory";

export enum PostActions {
    onGetPost = "onGetPost",
    onGetPostSucceed = "onGetPostSucceed",
    onGetPostFailed = "onGetPostFailed"
}

export interface onGetPostAction extends Action {
    type: PostActions.onGetPost
}

export interface onGetPostSucceedAction extends Action {
    type: PostActions.onGetPostSucceed
    post: Post
}

export interface onGetPostFailedAction extends Action {
    type: PostActions.onGetPostFailed
    error: any
}

export type PostType = onGetPostAction |
                       onGetPostFailedAction |
                       onGetPostSucceedAction;

export const onGetPostConstructor = (): onGetPostAction => {
    return {
        type: PostActions.onGetPost
    }
}

export const onGetPostSucceedConstructor = (post: Post): onGetPostSucceedAction => {
    return {
        type: PostActions.onGetPostSucceed,
        post
    }
}

export const onGetPostFailedConstructor = (error: any): onGetPostFailedAction => {
    return {
        type: PostActions.onGetPostFailed,
        error
    }
}

export const dispatchGetCards = (postId: number) => {
    return (dispatch: Dispatch<PostType>, getState: () => RootState, serviceFactory: ServiceFactory) => {
        dispatch(onGetPostConstructor())
        const postService = serviceFactory.getPostService()
        postService.get(postId)
        .then((post: Post) => {
            dispatch(onGetPostSucceedConstructor(post))
        })
        .catch((error: any) => {
            dispatch(onGetPostFailedConstructor(error))
        });
    }
}