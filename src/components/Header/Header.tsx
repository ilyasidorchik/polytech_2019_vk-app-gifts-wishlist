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
				alt="Илья Сидорчик"
			/>
			<p>Илья Сидорчик</p>
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
					src="https://sun1-27.userapi.com/c856024/v856024222/13faea/cJnQNlsjprI.jpg?ava=1"
					alt="Константин Константинопольский"
				/>
				<img
					className="Header-Thumbnail Header-Thumbnail_friend Header-Thumbnail_friend_2"
					src="https://sun1-18.userapi.com/c849020/v849020378/7b580/ZzqDSM3W0H8.jpg?ava=1"
					alt="Константин Константинопольский"
				/>
				<img
					className="Header-Thumbnail Header-Thumbnail_friend Header-Thumbnail_friend_3"
					src="https://sun9-32.userapi.com/c834103/v834103472/f6abb/PqyvNiyWmOE.jpg?ava=1"
					alt="Константин Константинопольский"
				/>
			</div>
			<p>Мои друзья</p>
		</NavLink>
	</div>
);

export default Header;
