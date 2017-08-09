import _ from 'lodash';
import { FETCH_POSTS,FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {},action){
	switch(action.type){
		case DELETE_POST:
			return _.omit(state,action.payload);
		case FETCH_POST:
			// const post = action.payload.data;
			// const newState = { ...state };
			// newState[post.id] = post;
			// return newState; ES5 WAY

			return { ...state, [action.payload.data.id] : action.payload.data }; //we are not creating array we are doing key interpolation
		
		case FETCH_POSTS: 
			console.log(action.payload.data); // [post1,post2] (an array)
			// we need an object this way {id1:{},id2:{}}, so we access easily the data without loops
			// lodash provides this library to transform the object
			return _.mapKeys(action.payload.data,'id'); //transformed object 
		default: 
			return state;
	}
}