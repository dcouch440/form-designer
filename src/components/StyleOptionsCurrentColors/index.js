import React, { useCallback } from 'react'
import useHover from '../../hooks/useHover';
import StyleOptionsCurrentColorsBlock from '../StyleOptionsCurrentColorsBlock';

import {
  ColorBlockContainer,

} from './styles';

export default function StyleOptionsCurrentColors ({ appStyles, onClick }) {

  const colors = useCallback(() => {
    return [
      // using set to clear duplicates
      ...(new Set(Object.values(appStyles).map(
        objLevelOne => Object.values(objLevelOne).map(
          ObjectLevelTwo => Object.entries(ObjectLevelTwo).map(
            // if key contains color return it
            ([k,v]) => /color/gi.test(k) ? v : undefined
          )
        )
      )
      .flat(Infinity)
      .filter(x => x !== undefined)))
    ]
  }, [appStyles])();

  const mappedColors = colors.map((color, index) => (
    <StyleOptionsCurrentColorsBlock
      onClick={() => onClick(color)}
      key={index}
      color={color}
    />
  ))
  return (
    <ColorBlockContainer>
      { mappedColors }
    </ColorBlockContainer>
  )
}
