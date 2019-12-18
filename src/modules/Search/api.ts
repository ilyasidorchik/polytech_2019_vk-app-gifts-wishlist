export const getSearchSuggestions = (searchParam: string) => {
	const searchSuggestions = [
		'игрушки для мальчиков',
		'игрушки для девочек',
		'игрушки',
		'илон маск',
		'илон маск tesla spacex и дорога в будущее'
	];

	return searchSuggestions;
};

export const getSearchResults = (searchParam: string) => {
	const searchResults = [
		{
			url: 'https://cdn1.ozone.ru/s3/multimedia-q/c1200/6004471766.jpg',
			title: 'Илон Маск. Tesla, SpaceX и дорога в будущее',
			price: '990',
			desc:
				'Книга Эшли Вэнса. 400 страниц, издательство «Олимп-Бизнес», год издания 2019, твердый переплет, 180×250 мм'
		}
	];

	return searchResults;
};
