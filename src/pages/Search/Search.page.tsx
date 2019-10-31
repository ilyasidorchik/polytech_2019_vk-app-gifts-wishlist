import React from 'react';

import Title from '../../components/Title';

import './Search.scss';

const Search: React.FC = () => {
	return (
		<div className="Search">
			<Title className="Search-Title">
				Вишлист&nbsp;
				<span
					role="img"
					aria-label="Эмодзи «Улыбающееся лицо с глазами-сердечками»"
				>
					😍
				</span>
			</Title>
		</div>
	);
};

export default Search;
