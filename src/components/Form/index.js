import React, { useContext, useEffect, useState } from 'react'
import { useDrop } from 'react-dnd';
import createComponentObject from '../../functions/createComponentObject';
import { StylesContext } from '../../StylesContext';
import FormModal from '../FormModal';

import {
  FormContainer
} from './styles';
// [createComponentObject({ type: 'button' })]
export default function Form () {
  const { appStyles } = useContext(StylesContext);
  const [inputs, setInputs] = useState([]);
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState('');
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
      setModal(true);
      setCurrentItem(item.name)
    }
  }, [dropped, item]);

  const handleSubmit = props => {
    setInputs(prev => [...prev, createComponentObject({
      type: currentItem,
      props,
    })]);
    setModal(false);
    setCurrentItem('')
  }

  return (
    <FormContainer
      backgroundColor={appStyles.page.nonHovered.backgroundColor}
      ref={drop}
      role={'Dustbin'}
    >
      {
        inputs.map(({ Render, props }, key) => <Render title={props.title} key={key} />)
      }
      {
        modal &&
          <FormModal
            type={currentItem}
            onSubmit={handleSubmit}
          />
      }
    </FormContainer>
  )
}
