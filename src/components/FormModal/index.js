import React, { useState } from 'react'
import AppTextInput from '../AppTextInput'
import FormModalGetProps from '../FormModalGetProps';
import { v4 as uuidV4 } from 'uuid'
import {
  Modal,
  ModalContent
} from './styles';

export default function FormModal ({ onSubmit, type }) {
  const [options, setOptions] = useState();
  const [formInputs, setFormInputs] = useState({});
  const [id, setId] = useState(uuidV4());

  const mainInputTitle = 'Enter The Title of your Input, We will use this to return the answerers to you.'

  const handleChange = e => {
    const { name, value } = e.target;
    setFormInputs(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const input = () => {
    return <>
    <h3>
      {mainInputTitle}
    </h3>
    <input
      name={id}
      onChange={handleChange}
    />
    </>
  }

  const multipleChoice = () => (
    ''
  );

  const handleCreateFormObject = () => {
    const question = {
      title: formInputs[id]

    }
    onSubmit(question);
  }

  const display = {
    input,
    multipleChoice
  }

  return (
    <Modal>
      <ModalContent>
       { display[type]() }
       <button onClick={handleCreateFormObject}>
         Create Input
       </button>
      </ModalContent>
    </Modal>
  )
}
