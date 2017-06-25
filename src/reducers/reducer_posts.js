import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {},action){
	switch(action.type){
		
		case FETCH_POSTS: 
			console.log(action.payload.data); // [post1,post2] (an array)
			// we need an object this way {id1:{},id2:{}}, so we access easily the data without loops
			// lodash provides this library to transform the object
			return _.mapKeys(action.payload.data,'id'); //transformed object 
		default: 
			return state;
	}
}