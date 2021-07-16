import { useContext } from "react";
import { Context } from "../../Context";
import useAppStyles from "../../hooks/useAppStyles";

import {
  InputContainer
} from './styles';

export default function AppTextInput ({
  autoComplete,
  onChange,
  value,
  type = 'text',
  placeholder,
  title,
  id, // object ID
  ...props
}) {
  const { styles, ref } = useAppStyles({ element: 'input' });
  const { formData, handleUpdateFormData } = useContext(Context);
  const {  color, ...rest } = styles;
  const currentData = formData[id];

  const handleReduceData = e => {
    const { value } = e.target;
    handleUpdateFormData({
      name: id,
      value: {
        ...currentData,
        data: value
      }
    });
  };

  return (
    <InputContainer
      color={color}
    >
      { title && <h3>{ title }</h3> }
      <input
        autoComplete={autoComplete}
        ref={ref}
        name={id}
        style={rest}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleReduceData}
        {...props}
      />
    </InputContainer>
  );
}
