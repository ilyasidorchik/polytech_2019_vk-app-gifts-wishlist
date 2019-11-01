import React, { ReactNode } from 'react';
import cx from 'classnames';

import './Title.scss';
import './_level/Title_level_1.scss';
import './_level/Title_level_2.scss';

interface TitleProps {
	className: string;
	children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ className, children }) => (
	<div className={cx('Title', className)}>{children}</div>
);

export default Title;
