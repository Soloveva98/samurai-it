import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';
import { propTypes } from 'redux-form';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

	if (!profile) {
		return <Preloader />
	}

	const mainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
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

				<div className={s.info}>
					<div>
						<span className={s.title}>Name:</span> {profile.fullName}
					</div>
					<div>
						<span className={s.title}>Info</span>: {profile.aboutMe}
					</div>
					<div>
						<span className={s.title}>Contacts:</span>
						<div className={s.contacts}>
							<div>{profile.contacts.facebook}</div>
							<div>{profile.contacts.vk}</div>
							<div>{profile.contacts.twitter}</div>
							<div>{profile.contacts.instagram}</div>
							<div>{profile.contacts.youtube}</div>
							<div>{profile.contacts.github}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;