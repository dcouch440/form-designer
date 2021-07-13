import React from 'react'

export default function RadioSelectTrueFalse ({
  obj,
  name,
  onChange,
  title
}) {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        <li>
          <input
            name={name}
            type='radio'
            onChange={() => onChange({target: {
              name,
              value: true
            }})}
            checked={true === obj[name]}
            />
          <label>Yes</label>
        </li>
        <li>
          <input
            name={name}
            type='radio'
            onChange={() => onChange({target: {
              name,
              value: false
            }})}
            checked={false === obj[name]}
            />
          <label>No</label>
        </li>
      </ul>
    </>
  )
}
