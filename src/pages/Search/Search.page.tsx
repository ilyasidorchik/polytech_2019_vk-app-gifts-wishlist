import React from 'react';

import Title from '../../components/Title';

import './Search.scss';
import Input from '../../components/Input';

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
			<form className="Search-Form">
				<Input
					className="Input_level_main"
					name="search"
					placeholder="Введите название товара"
				/>
			</form>
		</div>
	);
};

export default Search;
