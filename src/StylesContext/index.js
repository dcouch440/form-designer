import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react'

const StylesContext = createContext();

function StylesContextProvider (props) {
  const defaultStyles = {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#000',
    backgroundColor: '#FFF',
    borderRadius: '7px',
    color: '#000',
  }
  const defaultHovered = {
    borderColor: '#000',
    backgroundColor: '#FFF',
    color: '#000',
  }
  const [appStyles, setAppStyles] = useState({
    button: {
      nonHovered: {
        ...defaultStyles,
        transition: '0.2s',
        cursor: 'pointer',
        width: '150px',
        borderRadius: '7px',
        backgroundColor: '#000',
        padding: '30px',
      },
      hovered: {
        backgroundColor: '#000',
        color: '#FFF'
      }
    },
    page: {
      nonHovered: {

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
        ...defaultHovered
      }
    },
  });
  return (
    <StylesContext.Provider value={{
      appStyles,
      setAppStyles
    }}>
      {props.children}
    </StylesContext.Provider>
  );
}

StylesContextProvider.propTypes = {
  children: PropTypes.any
};

export { StylesContextProvider, StylesContext };
