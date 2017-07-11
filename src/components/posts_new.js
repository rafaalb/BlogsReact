import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
class PostsNew extends Component{

  renderField(field){
  	return(
  		<div className="form-group">
  			<label>{field.label}</label>
  			<input 
  				className="form-control"
  				type="text"
  				{...field.input} /> 
  			{field.meta.error}
  		</div>
  	);
  }

  onSubmit(values){
  	//this === component
  	console.info(values);
  }

  render(){
  	const {handleSubmit} = this.props;
    return(
    	<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
    		<Field 
    			label="Title"
    			name="title"
    			component={this.renderField} />
    		<Field 
    			label="Categories"
    			name="categories"
    			component={this.renderField} />
    		<Field
    			label="Post Content"
    			name="content"
    			component={this.renderField} />
    		<button type="submit" className="btn btn-primary">Submit</button>
    	</form>);
  }
}

function validate(values){

	const errors = {};


	if(!values.title || values.title.length < 3){
		errors.title = "Enter a title that is at least 3 characters"; 
	}
	if(!values.categories){
		errors.categories = "Enter a Category";
	}
	if(!values.content){
		errors.content = "Enter some Content please";
	}


	return errors;// if we return errors empty, redux form asummes it has not errors, if it has any properties, reduxform assumes its invalid
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(PostsNew);
