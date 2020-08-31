import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class PostsNew extends React.Component {
    renderField = (field) => {
        const className = `form-group ${field.meta.touched && field.meta.error? 'has-danger':''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input}/>
                <div className="text-help">
                 {field.meta.touched? field.meta.error: ''}
                </div>
            </div>
        )
    }
    onSubmit = (values) => {
        this.props.createPost(values, ()=>{
            this.props.history.push('/');
        }); //Dispatch action creator
    }
    render(){
        return (
            <form onSubmit = {this.props.handleSubmit(this.onSubmit)}> 
                <Field name="title" component={this.renderField} label="Title"/>
                <Field name="categories" component={this.renderField} label="Categories"/>
                <Field name="content" component={this.renderField} label="Content"/>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link style={{marginLeft:'5px'}} to="/" className="btn btn-danger">Cancel</Link>
            </form>     
        )
    }
}

const validateForm = (values) => {

    const errors = {};

    //Validate all values
    if(!values.title){
        errors.title = "Please enter title for this post."
    }
    if(!values.categories){
        errors.categories = "Please enter category for this post."
    }
    if(!values.content){
        errors.content = "Please enter content for this post."
    }

    return errors; //If errors has any properties then the form is invalid
}

const reduxFormInit = reduxForm({
    form:'PostNewForm',//Name of the form to connect redux and this form
    validate: validateForm //Validate function gets call to validate form values
})(PostsNew);

export default connect(null, {createPost:createPost})(reduxFormInit);