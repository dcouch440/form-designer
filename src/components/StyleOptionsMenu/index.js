import React, { useState } from 'react'
import useAppStyles from '../../hooks/useAppStyles';
import StyleOptionsButton from '../StyleOptionsButton';

import {
  OptionContainer
} from './styles';

export default function AppStyleOptions () {
  const [element, setElement] = useState('button');
  const [styleType, setStyleType] = useState('nonHovered');
  const { updateStyle } = useAppStyles({ element, styleType });

  const elements = [
    {
      set: 'button',
      buttonText: 'Buttons'
    },
    {
      set: 'multipleChoice',
      buttonText: 'Multiple Choice'
    },

  ];

  const styleOptions = [
    {
      set: 'nonHovered',
      buttonText: 'Default'
    },
    {
      set: 'hovered',
      buttonText: 'Hovered'
    }
  ];

  return (

    <OptionContainer>
      <StyleOptionsButton
        activeButton={element}
        elementTypes={elements}
        onClick={setElement}
      />

      <StyleOptionsButton
        activeButton={styleType}
        elementTypes={styleOptions}
        onClick={setStyleType}
        span={2}
      />

    </OptionContainer>
  )
}
