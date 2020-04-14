import { Post } from "../../models/post";
import { PostType, PostActions } from "../actions/postAction";

export interface State {
    posts: Post[];
    loading: boolean;
}

export const initialState: State = {
    posts: [],
    loading: false
}

export const reducer = (state: State = initialState, action: PostType) => {
    switch(action.type) {
        case PostActions.onGetPost:
            return Object.assign({}, state, {
                loading: true
            });
        case PostActions.onGetPostSucceed:
            return Object.assign({}, state, {
                posts: [...state.posts, action.post]
            });
        case PostActions.onGetPostFailed:
            return Object.assign({}, state, {
                error: action.error
            });
        default:
            return Object.assign({}, state);
    }
}