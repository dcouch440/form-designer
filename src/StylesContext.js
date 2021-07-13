import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react'

const StylesContext = createContext();

function StylesContextProvider (props) {

  const [appStyles, setAppStyles] = useState({
    button: {
      nonHovered: {
        transition: '0.2s',
        cursor: 'pointer',
        width: '150px',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: '#FF0000',
        borderRadius: '7px',
        backgroundColor: '#00000000',
        padding: '30px',
      },
      hovered: {
        backgroundColor: '#000',
        color: '#FFF'
      }
    }
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
