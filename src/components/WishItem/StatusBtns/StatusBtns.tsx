import React from 'react';

import Button from '../../Button';
import './StatusBtns.scss';

interface IStatusBtns {
	isWanted?: boolean;
	handleClick: () => void;
}

const StatusBtns: React.FC<IStatusBtns> = ({
	isWanted = false,
	handleClick
}) => (
	<div className="StatusBtns">
		{!isWanted && (
			<Button className="StatusBtns-Favourite" onClick={handleClick}>
				Добавить в избранное
			</Button>
		)}

		{isWanted && (
			<Button
				className="StatusBtns-Favourite Button_default"
				onClick={handleClick}
			>
				Не подарю{' '}
				<span role="img" aria-label="Эмодзи «Задумчивое лицо»">
					😔
				</span>
			</Button>
		)}
	</div>
);

export default StatusBtns;
