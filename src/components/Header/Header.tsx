import React from 'react';
import { NavLink } from 'react-router-dom';

import '../Link/Link.scss';
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
			<p>
				<NavLink
					to="/profile"
					className="Link"
					activeClassName="Link_selected"
				>
					Константин Константинопольский
				</NavLink>
			</p>
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
			<p>
				<NavLink
					to="/profile"
					className="Link"
					activeClassName="Link_selected"
				>
					Мои друзья
				</NavLink>
			</p>
		</div>
	</div>
);

export default Header;
