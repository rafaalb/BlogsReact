import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
const ROOT_URL ='http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=rafapro15';
//before we do an actual request on the network we need to install axios for fetching and redux promise to handle the request
export function fetchPosts(){
	const request_posts = axios.get(ROOT_URL + '/posts'+API_KEY);

	return{
		type: FETCH_POSTS,
		payload:request_posts
	}
}

export function createPost(values,cb){
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,values)
		.then(() => cb());

	return{
		type: CREATE_POST,
		payload:request
	}


}

export function fetchPost(id){
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return{
		type: FETCH_POST,
		payload:request
	}
}

export function deletePost(id,cb){
	const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
		.then(() => cb());

	return{
		type: DELETE_POST,
		payload: id
	}
}