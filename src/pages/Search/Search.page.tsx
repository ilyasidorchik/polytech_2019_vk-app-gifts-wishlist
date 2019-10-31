import React, { useState, ChangeEvent } from 'react';

import Title from '../../components/Title';
import Input from '../../components/Input';

import './Search.scss';

const Search: React.FC = () => {
	const [value, setValue] = useState<string>('');

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setValue(value);
	};

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
					value={value}
					onChange={handleInputChange}
				/>
			</form>
		</div>
	);
};

export default Search;
