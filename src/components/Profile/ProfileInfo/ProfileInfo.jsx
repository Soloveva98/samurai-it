import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';
import { propTypes } from 'redux-form';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

	let [editMode, setEditMode] = useState(false);

	if (!profile) {
		return <Preloader />
	}

	const mainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}

	const onSubmit = (formData) => {
		saveProfile(formData).then(() => {
			setEditMode(false);
		});
	}

	return (
		<div>
			<div className={s.intro}>
				<img src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' />
			</div>
			<div className={s.descriptionBlock}>
				<div className={s.photo}>
					<img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
					{isOwner && <input type={"file"} onChange={mainPhotoSelected} />}
					<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
				</div>
				{editMode
					? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
					: <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}
			</div>
		</div>
	)
}


const ProfileData = ({ profile, isOwner, goToEditMode }) => {
	return (
		<div className={s.info}>
			{isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
			<div>
				<span className={s.title}>Full name:</span> {profile.fullName}
			</div>
			<div>
				<span className={s.title}>Looking for a job:</span> {profile.lookingForAJob ? "yes" : "no"}
			</div>
			{profile.lookingForAJob &&
				<div>
					<span className={s.title}>My professional skills:</span> {profile.lookingForAJobDescription}
				</div>}
			<div>
				<span className={s.title}>About me</span>: {profile.aboutMe}
			</div>
			<div>
				<span className={s.title}>Contacts:</span>
				<div className={s.contacts}>
					{Object.keys(profile.contacts).map(key => {
						return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
					})}
				</div>
			</div>
		</div>
	)
}


export const Contact = ({ contactTitle, contactValue }) => {
	return (<div>
		<b>{contactTitle}</b>: {contactValue}
	</div>)
}


export default ProfileInfo;