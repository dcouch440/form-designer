import { useState } from 'react';
import FormModalInputOptions from '../FormModalInputOptions';
import FormModalMultipleChoiceOptions from '../FormModalMultipleChoiceOptions';

import {
  Modal,
  ModalContent
} from './styles';

export default function FormModal ({ onSubmit, type }) {
  const [formInput, setFormInput] = useState('');
  const [optionsArrayInput, setOptionsArrayInput] = useState();
  const [optionsArray, setOptionsArray] = useState([]);

  const mainInputTitle = 'Enter The Title of your Input, We will use this to return the answerers to you.';

  const handleTitleChange = e => {
    const { value } = e.target;
    setFormInput(value);
  };


  const handleCreateFormObject = () => {
    const question = {
      title: formInput,
      optionsArray
    };
    onSubmit(question);
  };

  const display = type => {
    if (type === 'input') {
      return (
        <FormModalInputOptions
          mainInputTitle={mainInputTitle}
          handleTitleChange={handleTitleChange}
        />
      );
    } else if (type === 'multipleChoice') {
      return (
        <FormModalMultipleChoiceOptions
          optionsArrayInput={optionsArrayInput}
          setOptionsArray={setOptionsArray}
          setOptionsArrayInput={setOptionsArrayInput}
          optionsArray={optionsArray}
          mainInputTitle={mainInputTitle}
          handleTitleChange={handleTitleChange}
        />
      );
    }
  };

  return (
    <Modal>
      <ModalContent>
        <div>
          { display(type) }
        </div>
       <button onClick={handleCreateFormObject}>
         Create Input
       </button>
      </ModalContent>
    </Modal>
  );
}
