import React, { ReactNode } from 'react';
import cx from 'classnames';

import './Button.scss';

interface IButton {
	className?: string;
	children: ReactNode;
}

const Button: React.FC<IButton> = ({ className, children }) => (
	<div className={cx('Button', className)}>{children}</div>
);

export default Button;
