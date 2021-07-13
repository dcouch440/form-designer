import React, { useState } from 'react'
import useAppStyles from '../../hooks/useAppStyles';
import StyleOptionsButton from '../StyleOptionsButton';
import StyleOptionsColorPicker from '../StyleOptionsColorPicker';
import StyleOptionsCurrentColors from '../StyleOptionsCurrentColors';

import {
  OptionContainer
} from './styles';

export default function AppStyleOptions () {
  const [element, setElement] = useState('button');
  const [elementStyleVersion, setElementStyleVersion] = useState('nonHovered');
  const [elementAttribute, setElementAttribute] = useState('backgroundColor');
  const { appStyles, updateStyle } = useAppStyles({ element, elementStyleVersion });


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

  const elementAttributeButtons = [
    {
      set: 'backgroundColor',
      buttonText: 'Background Color'
    },
    {
      set: 'borderColor',
      buttonText: 'Border Color'
    }
  ];

  const handleSelectColor = color => {
    updateStyle({
      name: elementAttribute,
      value: color
    })
  }

  return (

    <OptionContainer>

      <StyleOptionsButton
        activeButton={element}
        elementTypes={elements}
        onClick={setElement}
      />

      <StyleOptionsButton
        activeButton={elementStyleVersion}
        elementTypes={styleOptions}
        onClick={setElementStyleVersion}
        span={2}
      />

      <StyleOptionsButton
        activeButton={elementAttribute}
        elementTypes={elementAttributeButtons}
        onClick={setElementAttribute}
      />

      <StyleOptionsColorPicker
        selectColor={handleSelectColor}
        appStyles={appStyles}
      />

    </OptionContainer>
  )
}
