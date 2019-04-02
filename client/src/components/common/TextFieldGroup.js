import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({
    name, 
    placeholder, 
    value,
    error, 
    type,
    onChange,
    disabled
}) => {
    return (
        <div className="form-group">
            <input
                type={type}
                className={classnames('form-control', {'is-valid' : error})}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

export default TextFieldGroup;
