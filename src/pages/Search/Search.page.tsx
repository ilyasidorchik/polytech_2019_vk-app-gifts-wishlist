import React, { useState } from 'react';
import ReactLoading from 'react-loading';

import Title from '../../components/Title';
import SearchForm from './components/SearchForm';
import './Search.scss';

const Search: React.FC = () => {
	const [value, setValue] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

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

			<SearchForm
				value={value}
				setValue={setValue}
				setLoading={setLoading}
			/>

			{loading && (
				<div className="Search-Results">
					<div className="Search-Preloader">
						<ReactLoading
							type="spokes"
							color="#ddd"
							height={30}
							width={30}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Search;
