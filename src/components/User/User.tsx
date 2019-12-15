import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Title from '../../components/Title';
import './User.scss';
import Button from '../../components/Button';

interface UserProps {
	className?: string;
	name: string;
}

const User: React.FC<UserProps> = ({ className, name }) => (
	<div className={cx('User', className)}>
		<div className="User-Image"></div>
		<div className="User-Preview">
			<Title className="User-Title" level="3">
				{name}
			</Title>
			<Link to="/User" className="Link">
				<Button>Узнать, что дарить</Button>
			</Link>
		</div>
	</div>
);

export default User;
