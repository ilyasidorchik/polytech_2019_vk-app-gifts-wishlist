import React, { ReactNode } from 'react';
import cx from 'classnames';

import './_level/Title_level_1.scss';
import './_level/Title_level_2.scss';
import './Title.scss';

interface TitleProps {
	className?: string;
	level?: string;
	children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ className, level, children }) => {
	className = cx('Title', `Title_level_${level}`, className);

	return React.createElement(`h${level}`, { className: className }, children);
};

export default Title;
