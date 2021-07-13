import PropTypes from "prop-types";
import React from 'react';
import { TextInput } from './styles';

import {
  OptionalButton
} from './styles';

export default function AppTextInput ({
  autoComplete,
  onChange,
  value,
  type = 'text',
  placeholder,
  label,
  name,
  title,
  button,
  onClick,
  buttonText,
  ...props
}) {
  return (
    <div>
      { title && <h3>{ title }</h3> }
      <label>
        { label }
        <TextInput
          autoComplete={autoComplete}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          {...props}
        />
      </label>
      {
        button &&
          <OptionalButton onClick={onClick}>
            { buttonText }
          </OptionalButton>
      }
    </div>
  );
}

AppTextInput.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
};
