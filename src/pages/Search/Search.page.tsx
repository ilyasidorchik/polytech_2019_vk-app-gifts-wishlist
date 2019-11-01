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
			<Title className="Title_level_1 Search-Title">
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
					name="search"
					placeholder="Название товара"
					value={value}
					onChange={handleInputChange}
					autoFocus={true}
				/>
			</form>

			<div className="Search-Selection">
				<Title className="Title_level_2 Search-Title">
					Популярное&nbsp;
					<span
						role="img"
						aria-label="Эмодзи «Ухмыляющееся лицо с глазами звёздами»"
					>
						🤩
					</span>
				</Title>
			</div>
		</div>
	);
};

export default Search;
