import React from 'react';
import {fetchPost} from '../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class PostsShow extends React.Component{
    componentDidMount(){
        //Provided by react router to read string from URL
        const val = this.props.match.params.id;
        const post = this.props.posts[val]
        if(post){
            this.props.fetchPost(val);
        }
    }
    render(){
        const selectedPost = this.props.posts[this.props.match.params.id];
        var renderContent = '';
        if(selectedPost != undefined){
            renderContent = (
                <div>
                    <h3>{selectedPost.title}</h3>
                    <h6>Categories: {selectedPost.categories}</h6>
                    <p>{selectedPost.content}</p>
                </div>
            )
        }
        return (
            <div>
                <Link to="/" className="btn btn-info">Home</Link>
              {renderContent}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps,{fetchPost:fetchPost})(PostsShow);