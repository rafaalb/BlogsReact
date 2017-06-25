import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
//before we do an actual request on the network we need to install axios for fetching and redux promise to handle the request
export function fetchPosts(){
	
	const ROOT_URL ='http://reduxblog.herokuapp.com/api';
	const API_KEY = '?key=rafapro15';
	const request_posts = axios.get(ROOT_URL + '/posts'+API_KEY);

	return{
		type: FETCH_POSTS,
		payload:request_posts
	}
}