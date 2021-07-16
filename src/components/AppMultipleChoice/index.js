import { useContext, useState } from 'react';
import { Context } from '../../Context';
import useAppStyles from '../../hooks/useAppStyles';

import {
  CheckboxList,
  CheckboxContainer
} from './styles';

export default function MultipleChoice ({
  id,
  options,
  title
}) {
  const { formData, handleUpdateFormData } = useContext(Context);
  const [selectAll, setSelectAll] = useState(false);
  const { styles } = useAppStyles({ element: 'multipleChoice' });
  const currentData = formData[id];

  const handleReduceData = newData => {
    handleUpdateFormData({
      name: id,
      value: {
        ...currentData,
        data: newData
      }
    });
  };

  const handleChange = e => {
    const { name, checked } = e.target;
    const newData = [...currentData.data];
    if (checked) {
      newData.push(name);
      handleReduceData(newData);
    } else if (!checked) {
      handleReduceData(newData.filter(n => n !== name));
    }
  };

  const handleSelectAll = () => {
    if (!selectAll) {
      setSelectAll(true);
      handleReduceData([...options]);
    } else if (selectAll) {
      setSelectAll(false);
      handleReduceData([]);
    }
  };

  const optionsArray = options.map((label, i) => {
    const checked = currentData.data.includes(label);
    return (
      <li key={i}>
        <input
          type="checkbox"
          name={label}
          checked={checked}
          onChange={handleChange}
        />
        { label }
      </li>
    );
  });

  return (
    <CheckboxContainer
      style={{
        ...styles
      }}
    >
      <h3>{ title }</h3>
      <CheckboxList>
        { optionsArray }
        <li>
          <input
            type='checkbox'
            checked={selectAll}
            onChange={handleSelectAll}
          />
          Select All
        </li>
      </CheckboxList>
    </CheckboxContainer>
  );
}
