import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import defaultStyles from '../data/defaultStyles';

const Context = createContext();

function ContextProvider (props) {
  const [formData, setFormData] = useState({});
  const [appStyles, setAppStyles] = useState({
    ...defaultStyles
  });

  const handleUpdateFormData = ({ name, value }) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Context.Provider value={{
      appStyles,
      setAppStyles,
      formData,
      setFormData,
      handleUpdateFormData,
    }}>
      {props.children}
    </Context.Provider>
  );
}


ContextProvider.propTypes = {
  children: PropTypes.any
};

export { ContextProvider, Context };
