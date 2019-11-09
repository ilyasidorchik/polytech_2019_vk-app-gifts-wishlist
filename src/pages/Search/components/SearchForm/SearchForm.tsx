import React, {
	useState,
	useEffect,
	useCallback,
	ChangeEvent,
	Dispatch,
	SetStateAction
} from 'react';

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

	const handleInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { value } = e.target;
			setValue(value);
		},
		[setValue]
	);

	const handleSubmit = useCallback(
		(e: ChangeEvent<HTMLFormElement>) => {
			e.preventDefault();

			setLoading(true);

			// get gift items
			// axios
			// 	.get('api/')
			// 	.then(response => console.log(response))
			// 	.catch(error => alert(error));
		},
		[setLoading]
	);

	useEffect(() => {
		// get gift titles
		// axios
		// 	.get('api/')
		// 	.then(response => console.log(response))
		// 	.catch(error => alert(error));
		const newExamples = ['iPhone X', 'iPhone XS', 'iPhone 11']
			.filter(item => value && item.includes(value))
			.map(item => item.replace(value, ''));

		setExamples(newExamples);
	}, [value]);

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
				{examples.length > 0 && (
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
