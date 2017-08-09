import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component{

  renderField(field){
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
  	return(
  		<div className={className}>
  			<label>{field.label}</label>
  			<input 
  				className="form-control"
  				type="text"
  				{...field.input} /> 
        <div className="text-help">
  			  {touched ? error: ''}
        </div>
  		</div>
  	);
  }

  onSubmit(values){
  	//this === component
  	this.props.createPost(values, () => {
      this.props.history.push('/');  
    });
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
        <Link className="btn btn-danger" to="/">Cancel</Link>
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
})(
    connect(null,{ createPost })(PostsNew)
);


