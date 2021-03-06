import React, { Component } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "./../../../utils/validators/validators";
import { Textarea } from '../../common/FormsControl/FormsControl';


const MyPosts = React.memo((props) => {

	/*shouldComponentUpdate(nextProps, nextState) {
		return nextProps != this.props || nextState != this.state;
	}*/

	let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

	let newPostElement = React.createRef();

	let onAddPost = (values) => {
		props.addPost(values.newPostText);
	};

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<AddNewPostFormRedux onSubmit={onAddPost} />
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
});


const maxLength10 = maxLengthCreator(10);

const addNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name="newPostText" component={Textarea} placeholder={"Post message"} validate={[required, maxLength10]} />
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
};

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(addNewPostForm);


export default MyPosts;