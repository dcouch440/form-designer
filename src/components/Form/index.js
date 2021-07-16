import { useContext, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import useInput from '../../hooks/useInput';
import { Context } from '../../Context';
import FormModal from '../FormModal';

import {
  FormContainer
} from './styles';

export default function Form () {
  const { appStyles } = useContext(Context);
  const [inputs, setInputs] = useState([]);
  const [modal, setModal] = useState(false);
  const createComponent = useInput();
  const [currentItem, setCurrentItem] = useState('');
  const [{ item, dropped }, drop] = useDrop(() => ({
    accept: 'BOX',
    collect: monitor => ({
      item: monitor.getItem(),
      dropped: monitor.didDrop()
    })
  }));

  useEffect(() => {
    if (dropped) {
      setModal(true);
      setCurrentItem(item.name);
    }
  }, [dropped, item]);

  const handleModalSubmit = props => {
    setInputs(prev => [...prev, createComponent({
      type: currentItem,
      props,
    })]);
    setModal(false);
    setCurrentItem('');
  };

  const showComponents = inputs
    .map(({ Component, props, id }, key) => (
      <Component
        title={props.title}
        key={key}
        id={id}
        options={props.options}
      />
    ));

  return (
    <FormContainer
      backgroundColor={appStyles.page.nonHovered.backgroundColor}
      ref={drop}
      role={'Dustbin'}
    >
      { showComponents }
      {
        modal &&
          <FormModal
            type={currentItem}
            onSubmit={handleModalSubmit}
          />
      }
    </FormContainer>
  );
}
