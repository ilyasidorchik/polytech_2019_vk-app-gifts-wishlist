import React from 'react';

import StatusBtns from './StatusBtns';
import Title from '../Title';
import './WishItem.scss';

export interface IWishItem {
	url: string;
	title: string;
	price: number;
	desc: string;
}

const WishItem: React.FC<IWishItem> = ({ url, title, price, desc }) => (
	<div className="WishItem">
		<div className="WishItem-Info">
			<img className="WishItem-Cover" src={url} alt={title} />
			<Title className="WishItem-Title" level="4">
				{title}
			</Title>
			<div className="WishItem-Price">{price}&nbsp;₽</div>
			<div className="WishItem-Desc">{desc}</div>
		</div>
		<StatusBtns />
	</div>
);

export default WishItem;
