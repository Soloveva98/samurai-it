import React from 'react';
import s from './Profile.module.css';
import MyPosts from './Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './Myposts/MypostsContainer';

const Profile = (props) => {

	return (
		<div>
			<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
			<MyPostsContainer />
		</div>
	)
}

export default Profile;