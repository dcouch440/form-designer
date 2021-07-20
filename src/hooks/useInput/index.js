import AppTextInput from '../../components/AppTextInput';
import AppMultipleChoice from '../../components/AppMultipleChoice';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { Context } from '../../Context';

export default function useInput () {
  const { setFormData } = useContext(Context);

  const components = {
    input: props => <AppTextInput { ...props } />,
    multipleChoice: props => <AppMultipleChoice { ...props } />
  };


  return ({ type, props, creatingForm = true, id = uuidv4() }) => {
    const data = {
      input: '',
      multipleChoice: []
    }[type];

    // form data is created and sent as obj, this is done because formData is empty at the time of sending obj
    // this way it matches formData for the next render
    if (creatingForm) {
      setFormData(prev => ({
        ...prev,
        [id]: {
          title: props.title,
          id,
          type,
          data,
          props
        }
      }));
    }

    return {
      id,
      Component: components[type],
      props,
      type
    };
  };
}
