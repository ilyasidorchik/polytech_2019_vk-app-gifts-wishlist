import React, { ReactNode } from 'react';
import cx from 'classnames';

import './Button.scss';

interface IButton {
	className?: string;
	children: ReactNode;
	onClick?: any;
}

const Button: React.FC<IButton> = ({ className, children, onClick }) => (
	<div className={cx('Button', className)} onClick={onClick}>
		{children}
	</div>
);

export default Button;
