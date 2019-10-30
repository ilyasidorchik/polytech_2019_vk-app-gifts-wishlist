import React from 'react';

import './Header.scss';

import UserThumbnail from './assets/UserThumbnail.jpg';

const Header: React.FC = () => (
	<div className="Header">
		<div className="Header-Preview Header-Preview_user">
			<img
				className="Header-Thumbnail Header-Thumbnail_user"
				src={UserThumbnail}
				alt="Константин Константинопольский"
			/>

			<p>Константин Константинопольский</p>
		</div>
		<div className="Header-Preview Header-Preview_friends">
			<div className="Header-ThumbnailStack">
				<img
					className="Header-Thumbnail Header-Thumbnail_friend Header-Thumbnail_friend_1"
					src={UserThumbnail}
					alt="Константин Константинопольский"
				/>
				<img
					className="Header-Thumbnail Header-Thumbnail_friend Header-Thumbnail_friend_2"
					src={UserThumbnail}
					alt="Константин Константинопольский"
				/>
				<img
					className="Header-Thumbnail Header-Thumbnail_friend Header-Thumbnail_friend_3"
					src={UserThumbnail}
					alt="Константин Константинопольский"
				/>
			</div>
			<p>Мои друзья</p>
		</div>
	</div>
);

export default Header;
