import React, { useState } from 'react'

import {
  CheckboxContainer,
  CheckboxList
} from './styles';

// SEE INTEREST IN PAGES

export default function MultipleChoice ({
  obj,
  category,
  onChange,
  optionsLabelsArray,
  title,
  selectAllOption,
  otherOption,
  renderAdditional
}) {
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    const changeAll = ({ bool }) => {
      const objectConvertedToTrueArray = Object
        .keys(obj[category]).map(
          key => ({[key]: bool})
        );
      return Object.assign(
        {},
        ...objectConvertedToTrueArray,
      );
    }

    if (selectAll === false) {
      setSelectAll(true)
      onChange({
        target: {
          name: category,
          value: changeAll({ bool: true })
        }
      });
    } else {
      setSelectAll(false)
      onChange({
        target: {
          name: category,
          value: changeAll({ bool: false })
        }
      });
    }
  }

  const handleCheckboxChange = e => {
    if (e.target.type === 'checkbox') {
      const { name, checked } = e.target;
      const newData = {
        ...obj[category],
        [name]: checked
      };
      onChange({
        target: {
          name: category,
          value: newData
        }
      });
    } else if (e.target.type === 'input') {
      const { name, value } = e.target;
      const newData = {
        ...obj[category],
        [name]: value
      };
      onChange({
        target: {
          name: category,
          value: newData
        }
      });
    }
  };

  const options = optionsLabelsArray.map(([option, label], i) => {
    return (
      <li key={i}>
        <input
            type="checkbox"
            name={option}
            checked={obj[category][option]}
            onChange={handleCheckboxChange}
          />
        { label }
      </li>
    );
  })

  return (
    <CheckboxContainer>
      <h3>{ title }</h3>
      <CheckboxList>
        { options }
        {/* addition stuff can be rendered here by putting them into the argument and they will work just if they where in the outside. this way this can be used for whatever */}
        { renderAdditional }

        {/* select all option - clicking will make all values true */}
        {
          selectAllOption &&
          <li>
            <input
              type='checkbox'
              checked={selectAll}
              onChange={handleSelectAll}
            />
            Select All
          </li>
        }
      </CheckboxList>
    </CheckboxContainer>
  );
}
