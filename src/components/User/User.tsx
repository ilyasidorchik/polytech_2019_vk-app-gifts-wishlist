import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Title from '../../components/Title';
import Button from '../../components/Button';
import './User.scss';

interface UserProps {
	className?: string;
	name: string;
	url?: string;
	id?: string;
	onClick?: () => void;
}

const User: React.FC<UserProps> = ({ className, name, url, onClick }) => (
	<div className={cx('User', className)}>
		{!url && <div className="User-Image"></div>}
		{url && <img className="User-Image" src={url} />}

		{!onClick && (
			<div className="User-Preview">
				<Title className="User-Title" level="3">
					{name}
				</Title>
				<Link to="/User" className="Link">
					<Button>Узнать, что дарить</Button>
				</Link>
			</div>
		)}

		{onClick && (
			<div className="User-Preview" onClick={onClick}>
				<Title className="User-Title" level="3">
					{name}
				</Title>
				<Link to="/User" className="Link">
					<Button>Узнать, что дарить</Button>
				</Link>
			</div>
		)}
	</div>
);

export default User;
