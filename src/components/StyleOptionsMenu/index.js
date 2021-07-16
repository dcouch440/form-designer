import { useState } from 'react';
import useAppStyles from '../../hooks/useAppStyles';
import StyleOptionsButton from '../StyleOptionsButton';
import StyleOptionsColorPicker from '../StyleOptionsColorPicker';

import {
  elementsButtons,
  styleEffectButtons,
  elementAttributeButtons
} from './options';

import {
  OptionContainer,
  MenuHeader
} from './styles';

export default function StyleOptionsMenu () {
  const [element, setElement] = useState('input');
  const [elementStyleVersion, setElementStyleVersion] = useState('nonHovered');
  const [elementAttribute, setElementAttribute] = useState('backgroundColor');
  const { appStyles, updateStyle } = useAppStyles({ element, elementStyleVersion });

  const handleSelectColor = color => {
    updateStyle({
      name: elementAttribute,
      value: color
    });
  };

  return (
    <OptionContainer>
      <MenuHeader>Color</MenuHeader>
      <StyleOptionsButton
        activeElement={element}
        activeButton={element}
        elementTypes={elementsButtons}
        onClick={setElement}
      />
      <MenuHeader>Color For</MenuHeader>
      <StyleOptionsButton
        activeElement={element}
        activeButton={elementStyleVersion}
        elementTypes={styleEffectButtons(element)}
        onClick={setElementStyleVersion}
        span={2}
      />
      <MenuHeader>Color The</MenuHeader>
      <StyleOptionsButton
        activeElement={element}
        activeButton={elementAttribute}
        elementTypes={elementAttributeButtons(element)}
        onClick={setElementAttribute}
        slim={true}
        columns={3}
      />
      <MenuHeader>Your Colors</MenuHeader>
      <StyleOptionsColorPicker
        buttonValues={elementAttributeButtons(element)}
        selectedButton={elementAttribute}
        selectColor={handleSelectColor}
        appStyles={appStyles}
      />
    </OptionContainer>
  );
}
