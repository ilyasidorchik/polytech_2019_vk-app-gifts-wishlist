import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';

import Title from '../../components/Title';
import SearchForm from './components/SearchForm';
import { getSearchResults } from '../../modules/Search';
import WishItem from '../../components/WishItem';
import './Search.scss';

const Search: React.FC = () => {
	const [value, setValue] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const results = useSelector(getSearchResults);

	useEffect(() => {
		console.log(results);
	}, [results]);

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

			<div className="Search-Results">
				{loading && (
					<div className="Search-Preloader">
						<ReactLoading
							type="spokes"
							color="#ddd"
							height={30}
							width={30}
						/>
					</div>
				)}

				{results &&
					results.map(({ url, title, price, desc }: any) => (
						<WishItem
							url={url}
							title={title}
							price={price}
							desc={desc}
						/>
					))}
			</div>
		</div>
	);
};

export default Search;
