import React, { HTMLAttributes, ChangeEvent } from 'react';
import cx from 'classnames';

import './Input.scss';

interface InputProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    name: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    autoFocus?: boolean;
}

const Input: React.FC<InputProps> = ({
    className,
    name,
    type,
    placeholder,
    value,
    onChange,
    autoFocus
}) => {
    return (
        <input
            className={cx('Input', className)}
            type={type}
            name={name}
            placeholder={placeholder}
            aria-label={placeholder}
            value={value}
            onChange={onChange}
            autoFocus={autoFocus}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
        />
    );
};

export default Input;
