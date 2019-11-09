import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Title from '../../components/Title';
import SearchForm from '../Search/components/SearchForm';
import Button from '../../components/Button';
import './FriendsList.scss';

const FriendsList: React.FC = () => {
	const [value, setValue] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	return (
		<div className="FriendsList">
			<Title className="UserPage-Title" level="1">
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
				{[
					'Константин Константинопольский',
					'Илья Сидорчик',
					'Константин Константинопольский',
					'Илья Сидорчик',
					'Константин Константинопольский',
					'Илья Сидорчик'
				].map(friend => (
					<div className="Friend">
						<div className="Friend-Image"></div>
						<div className="Friend-Preview">
							<Title className="Friend-Title" level="3">
								{friend}
							</Title>
							<Link to="/friend" className="Link">
								<Button>Узнать, что дарить</Button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FriendsList;
