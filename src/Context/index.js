import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const Context = createContext();

function ContextProvider (props) {
  const defaultStyles = {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
    borderRadius: '7px',
    color: '#000000',
  };
  const [appStyles, setAppStyles] = useState({
    button: {
      nonHovered: {
        ...defaultStyles,
        transition: '0.2s',
        cursor: 'pointer',
        width: '150px',
        borderRadius: '7px',
        backgroundColor: '#000000',
        padding: '30px',
      },
      hovered: {
        backgroundColor: '#000000',
        color: '#FFFFFF'
      }
    },
    multipleChoice: {
      nonHovered: {
      },
      hovered: {
        color: '#000000'
      }
    },
    page: {
      nonHovered: {
        backgroundColor: '#FFFFFF'
      },
      hovered: {
      },
    },
    input: {
      nonHovered: {
        ...defaultStyles,
        padding: '5px',
        borderRadius: '5px',
        width: '250px',
        height: '30px',
      },
      hovered: {
      }
    },
  });

  const [formData, setFormData] = useState({});

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
