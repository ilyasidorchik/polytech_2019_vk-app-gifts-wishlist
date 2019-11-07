import React, { useState, useCallback, ChangeEvent } from 'react';

import Title from '../../components/Title';
import Input from '../../components/Input';

import './Search.scss';

const Search: React.FC = () => {
	const [value, setValue] = useState<string>('');

	const handleInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { value } = e.target;
			setValue(value);
		},
		[]
	);

	return (
		<div className="Search">
			<Title className="Search-Title" level="1">
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

			{!value && <div className="Search-Selection">
				<Title className="Search-Title" level="2">
					Популярное&nbsp;
					<span
						role="img"
						aria-label="Эмодзи «Ухмыляющееся лицо с глазами звёздами»"
					>
						🤩
					</span>
				</Title>

				<div className="Search-SelectionList">
					<div className="Search-Item"></div>
					<div className="Search-Item"></div>
					<div className="Search-Item"></div>
				</div>
			</div>}
		</div>
	);
};

export default Search;
