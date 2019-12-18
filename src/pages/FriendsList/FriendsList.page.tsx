import React, { useCallback } from 'react';
import ReactLoading from 'react-loading';
import { useHistory } from 'react-router-dom';

import User from '../../components/User';
import Title from '../../components/Title';
import './FriendsList.scss';

const FriendsList: React.FC = () => {
	let history = useHistory();

	const handleClick = useCallback(() => {
		history.push('/friend-page?boxdd');
	}, []);

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

			<div className="FriendsList-Results">
				{[
					{
						name: 'Дмитрий Гущин',
						url:
							'https://sun1-27.userapi.com/c856024/v856024222/13faea/cJnQNlsjprI.jpg?ava=1'
					},
					{
						name: 'Марина Даньшина',
						url:
							'https://sun1-18.userapi.com/c849020/v849020378/7b580/ZzqDSM3W0H8.jpg?ava=1'
					},
					{
						name: 'Сергей Чернобровкин',
						url:
							'https://sun9-32.userapi.com/c834103/v834103472/f6abb/PqyvNiyWmOE.jpg?ava=1'
					}
				].map(({ name, url }) => (
					<User name={name} url={url} onClick={handleClick} />
				))}

				<ReactLoading
					type="spokes"
					color="#ddd"
					height={30}
					width={30}
				/>
			</div>
		</div>
	);
};

export default FriendsList;
