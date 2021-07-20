import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context';
import useInput from '../../hooks/useInput';

import {
  Header,
  JSONText,
  DisplayFormDataPageContainer,
  FormContainer,
  UserForm
} from './styles';

export default function ViewForm () {
  const { formData, appStyles } = useContext(Context);
  const [inputs, setInputs] = useState([]);
  const generateInput = useInput();
  const [generate, setGenerate] = useState(false);

  useEffect(() => {
    if (!generate) {
      return;
    }
    const inputObjectData = Object.values(formData).map(input => {
      return generateInput({ creatingForm: false, ...input });
    });
    setInputs([...inputObjectData]);

  }, [formData, generate, generateInput]);

  const style = JSON.stringify(appStyles, null, '\t');
  const form = JSON.stringify(formData, null, '\t');

  const inputComponents = () => {
    const components = Object.values(inputs)
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
      >
        { components }
      </FormContainer>
    );
  };


  const handleClick = () => {
    setGenerate(true);
  };

  return (
    <DisplayFormDataPageContainer>
      <JSONText>
        <Header>Your Styles</Header>
        <div>{ style }</div>
        <Header>Your Form Data</Header>
        <div>{ form }</div>
      </JSONText>
      <UserForm>
        <div>
          { generate && inputComponents() }
        </div>
        {
          !generate &&
            <button
              onClick={handleClick}
            >
              Generate From JSON
            </button>
        }
      </UserForm>
    </DisplayFormDataPageContainer>
  );
}
