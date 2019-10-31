import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

import './Input.scss';

interface InputProps extends HTMLAttributes<HTMLElement> {
	className?: string;
	name: string;
	type?: string;
	placeholder?: string;
}

const Input: React.FC<InputProps> = ({ className, name, type, placeholder }) => {
	return (
		<input
			className={cx('Input', className)}
			type={type}
			name={name}
			placeholder={placeholder}
			aria-label={placeholder}
			autoComplete="off"
			autoCorrect="off"
			autoCapitalize="off"
			spellCheck={false}
		/>
	);
};

export default Input;
