import React, {
	useState,
	useEffect,
	useCallback,
	ChangeEvent,
	Dispatch,
	SetStateAction
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getSearchSuggestions,
	fetchSearchSuggestionsRequest
} from '../../../../modules/Search';

import Input from '../../../../components/Input';

interface SearchFormProps {
	className?: string;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	setLoading: Dispatch<SetStateAction<boolean>>;
}

const SearchForm: React.FC<SearchFormProps> = ({
	value,
	setValue,
	setLoading
}) => {
	const [examples, setExamples] = useState<Array<string>>([]);
	const selectedData = useSelector(getSearchSuggestions);
	const dispatch = useDispatch();

	const handleInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { value } = e.target;
			setValue(value);

			dispatch(fetchSearchSuggestionsRequest(value));
		},
		[setValue, dispatch]
	);

	const handleSubmit = useCallback(
		(e: ChangeEvent<HTMLFormElement>) => {
			e.preventDefault();

			setLoading(true);
		},
		[setLoading]
	);

	useEffect(() => {
		const newExamples =
			selectedData &&
			selectedData
				.filter((item: string) => value && item.includes(value))
				.map((item: string) => item.replace(value, ''));

		setExamples(newExamples);
	}, [value, selectedData]);

	return (
		<form className="Search-Form" onSubmit={handleSubmit}>
			<div className="Search-Container">
				<Input
					className="Search-Input"
					name="search"
					placeholder="Название товара"
					value={value}
					onChange={handleInputChange}
					autoFocus={true}
				/>
				{examples && examples.length > 0 && (
					<div className="Search-ExampleList">
						{examples.map((item, i) => (
							<div className="Search-Example" key={i}>
								{value}
								<b>{item}</b>
							</div>
						))}
					</div>
				)}
			</div>
		</form>
	);
};

export default SearchForm;
