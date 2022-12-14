export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_POST = 'GET_ALL_USERS_POST';
export const GET_ALL_COMMENTS_POST = 'GET_ALL_COMMENTS_POST';


export function getAllPosts(){
    return function(dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
                .then(r=> r.json())
                .then(posts => dispatch({
                    type: GET_ALL_POSTS,
                    payload: posts
            }))
    };
}


export function getAllUsers(){
    return function(dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/users")
                .then(r => r.json())
                .then(users => dispatch({
                    type: GET_ALL_USERS,
                    payload: users
            }))
    };
}


export function getAllUserPosts(id){
    return function(dispatch) {
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                .then(r => r.json())
                .then(userPosts => dispatch({
                    type: GET_ALL_USERS_POST,
                    payload: userPosts
            }))
    };
}






export function getAllCommentsPost(postId){
    return function(dispatch) {
        return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
                .then(r=> r.json())
                .then(comments => dispatch({
                    type: GET_ALL_COMMENTS_POST,
                    payload: comments
            }))
    };
}