import React, { useState } from 'react';

import User from '../../components/User';
import Title from '../../components/Title';
import SearchForm from '../Search/components/SearchForm';
import './FriendsList.scss';

const FriendsList: React.FC = () => {
	const [value, setValue] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	return (
		<div className="FriendsList">
			<Title className="FriendsList-Title" level="1">
				Мои друзья&nbsp;
				<span
					role="img"
					aria-label="Эмодзи «Лицо с высунутым языком и подмигивающим глазом эмоджи»"
				>
					😜
				</span>
			</Title>

			<SearchForm
				value={value}
				setValue={setValue}
				setLoading={setLoading}
			/>

			<div className="FriendsList-Results">
				{!loading &&
					[
						'Константин Константинопольский',
						'Илья Сидорчик',
						'Константин Константинопольский',
						'Илья Сидорчик',
						'Константин Константинопольский',
						'Илья Сидорчик'
					].map(friendName => <User name={friendName} />)}
			</div>
		</div>
	);
};

export default FriendsList;
