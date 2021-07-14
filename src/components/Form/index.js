import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd';
import createComponentObject from '../../functions/createComponentObject';

import {
  FormContainer
} from './styles';
// [createComponentObject({ type: 'button' })]
export default function Form () {
  const [inputs, setInputs] = useState([]);
  const [{ item, dropped }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'BOX',
    // Props to collect
    collect: monitor => ({
      item: monitor.getItem(),
      dropped: monitor.didDrop()
    })
  }));

  useEffect(() => {
    if (dropped) {
      setInputs(prev => [...prev, createComponentObject({ type: item.name })])
    }
  }, [dropped, item]);

  console.log({dropped})

  return (
    <FormContainer
      ref={drop}
      role={'Dustbin'}
    >
      {
        inputs.map(({ Render }, index) => <Render key={index}/>)
      }
    </FormContainer>
  )
}
