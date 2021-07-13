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
        border: '2px solid red',
        borderRadius: '7px',
        backgroundColor: 'transparent',
        padding: '30px',
      },
      hovered: {
        backgroundColor: 'black',
        color: 'white'
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
