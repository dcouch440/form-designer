import { useState } from 'react';
import FormModalInputOptions from '../FormModalInputOptions';
import FormModalMultipleChoiceOptions from '../FormModalMultipleChoiceOptions';

import {
  Modal,
  ModalContent
} from './styles';

export default function FormModal ({ onSubmit, type }) {
  const [formInput, setFormInput] = useState('');
  const [optionsInput, setOptionsInput] = useState('');
  const [options, setOptions] = useState([]);

  const mainInputTitle = 'Enter The Title of your Input, We will use this to return the answerers to you.';

  const handleTitleChange = e => {
    const { value } = e.target;
    setFormInput(value);
  };


  const handleCreateFormObject = () => {
    const question = {
      title: formInput,
      options
    };
    onSubmit(question);
  };

  const display = type => {
    return {
      input: () => (
        <FormModalInputOptions
          mainInputTitle={mainInputTitle}
          options={options}
          handleTitleChange={handleTitleChange}
        />
      ),
      multipleChoice: () => (
        <FormModalMultipleChoiceOptions
          optionsInput={optionsInput}
          setOptions={setOptions}
          setOptionsInput={setOptionsInput}
          options={options}
          mainInputTitle={mainInputTitle}
          handleTitleChange={handleTitleChange}
        />
      )
    }[type]();
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
