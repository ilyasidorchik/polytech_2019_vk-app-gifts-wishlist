import React from 'react';

import Title from '../../components/Title';
import './UserPage.scss';

const UserPage: React.FC = () => {
	return (
		<div className="UserPage">
			<Title className="UserPage-Title" level="1">Илья Сидорчик</Title>
		</div>
	);
};

export default UserPage;
