import React from 'react';
import { NavLink } from 'react-router-dom';

import '../Link/Link.scss';
import './Header.scss';

import UserThumbnail from './assets/UserThumbnail.jpg';

const Header: React.FC = () => (
	<div className="Header">
		<NavLink
			className="Link Header-Preview Header-Preview_user"
			activeClassName="Header-Link_selected"
			to="/profile"
		>
			<img
				className="Header-Thumbnail Header-Thumbnail_user"
				src={UserThumbnail}
				alt="Константин Константинопольский"
			/>
			<p>Константин Константинопольский</p>
		</NavLink>

		<NavLink
			className="Link Header-Preview Header-Preview_user"
			activeClassName="Header-Link_selected"
			to="/"
			exact
		>
			<p>Поиск новых подарков</p>
		</NavLink>

		<NavLink
			className="Link Header-Preview Header-Preview_friends"
			activeClassName="Header-Link_selected"
			to="/friends"
		>
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
		</NavLink>
	</div>
);

export default Header;
