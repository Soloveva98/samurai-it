import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';
import { propTypes, reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControl/FormsControl';
import { Contact } from './ProfileInfo';


const ProfileDataForm = ({ handleSubmit, profile, error }) => {
	return <form onSubmit={handleSubmit} className={s.info}>
		<div>
			<button>Save</button>
		</div>

		{error && <div className={s.formSummaryError}>
			{error}
		</div>}

		<div>
			<span className={s.title}>Full name:</span> {createField("Full name", "FullName", [], Input)}
		</div>
		<div>
			<span className={s.title}>Looking for a job:</span> {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
		</div>
		<div>
			<span className={s.title}>My professional skills:</span> {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
		</div>
		<div>
			<span className={s.title}>About me:</span> {createField("About me", "aboutMe", [], Textarea)}
		</div>
		<div>
			<span className={s.title}>Contacts:</span>
			<div className={s.contacts}>
				{Object.keys(profile.contacts).map(key => {
					return <div key={key} className={s.contact}>
						<b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
					</div>
				})}
			</div>
		</div>
	</form>
}


const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);


export default ProfileDataFormReduxForm;