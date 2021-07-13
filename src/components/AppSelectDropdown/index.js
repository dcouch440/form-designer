import React from 'react';

import {
  StyledSelect
} from './styles';

export default function SelectDropdown ({ onChange, value, name, data, title }) {

  const stateOptions = () => data.map(([abr, opt]) => {
    return (
      <option key={abr} value={abr}>{opt}</option>
    );
  })

  return (
    <>
      { title && <h3>{ title }</h3> }
      <StyledSelect value={value} name={name} onChange={onChange}>
        { stateOptions() }
      </StyledSelect>
    </>
  );
}
