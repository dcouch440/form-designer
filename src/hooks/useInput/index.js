import AppTextInput from '../../components/AppTextInput';
import AppMultipleChoice from '../../components/AppMultipleChoice';
import { v4 as uuidv4 } from 'uuid';
import { useContext, useRef } from 'react';
import { Context } from '../../Context';

export default function useInput () {
  const { setFormData } = useContext(Context);
  const ref = useRef(uuidv4());

  const components = {
    input: props => <AppTextInput { ...props } />,
    multipleChoice: props => <AppMultipleChoice { ...props } />
  };


  return ({ type, props }) => {
    const id = ref.current;
    const data = {
      input: '',
      multipleChoice: []
    }[type];

    // form data is created and sent as obj, this is done because formData is empty at the time of sending obj
    // this way it matches formData for the next render
    setFormData(prev => ({
      ...prev,
      [id]: {
        title: props.title,
        type,
        data
      }
    }));

    return {
      id,
      Component: components[type],
      props,
      type
    };
  };
}
