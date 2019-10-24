import React from 'react';

import './Button.scss';

const Button: React.FC = ({ children }) => (
	<div className="Button">{children}</div>
);

export default Button;
