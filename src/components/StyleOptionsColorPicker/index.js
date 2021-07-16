import { useRef, useLayoutEffect, useState } from 'react';
import StyleOptionsCurrentColors from '../StyleOptionsCurrentColors';
import "lucid-color-picker";

import {
  SelectButton,
  ButtonContainer
} from './styles';

export default function StyleOptionsColorPicker ({ selectColor, appStyles, buttonValues, selectedButton }) {
  const [color, setColor] = useState("#ff0000");
  const ref = useRef();

  const inputShouldBeLocked = () => {
    const [selected] = buttonValues.filter(attr => attr.set === selectedButton);
    return !selected.canSet;
  };

  const handleSetColor = () => {
    if (inputShouldBeLocked()) {
      return;
    }
    selectColor(color);
  };

  const onColorChange = e => setColor(e.target.value);
  const handleSelectColorFromCurrentColors = color => setColor(color);

  useLayoutEffect(() => {
    ref.current.addEventListener("change", onColorChange);
  }, [ref]);

  return (
    <>
      <StyleOptionsCurrentColors
        appStyles={appStyles}
        onClick={handleSelectColorFromCurrentColors}
      />
      <lucid-color-picker
        style={{
          width: '100%',
          height: '200px'
        }}
        ref={ref}
        value={color}
        onChange={onColorChange}
      />
      <div
        style={{
          background: color,
          margin: '5px auto 0',
          width: '100%',
          height: '50px'
        }}
      />
      <ButtonContainer>
        <SelectButton onClick={handleSetColor}>
          Select Color
        </SelectButton>
      </ButtonContainer>
    </>
  );
}
