import PropTypes from "prop-types";
import React from 'react';
import useAppStyles from "../../hooks/useAppStyles";

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
  const { styles, ref } = useAppStyles({ element: 'input' });

  return (
    <div
      style={{
        color: styles.color
      }}
    >
      { title && <h3>{ title }</h3> }
      <label>
        { label }
        <input
          autoComplete={autoComplete}
          ref={ref}
          name={name}
          style={styles}
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
