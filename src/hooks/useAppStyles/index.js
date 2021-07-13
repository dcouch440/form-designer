import { useContext, useState } from 'react'
import { StylesContext } from '../../StylesContext'
import useHover from '../useHover';

export default function useAppStyles ({ element, styleType }) {
  const [ref, isHovered] = useHover();
  const { appStyles, setAppStyles } = useContext(StylesContext);

  const styles = isHovered ? Object
    .assign(
      {},
      appStyles[element]['nonHovered'],
      appStyles[element]['hovered']
    )
    :
    appStyles[element]['nonHovered']

  const updateStyle = ({ name, value }) => {
    setAppStyles(prev => ({
      ...prev,
      [element]: {
        ...element,
        [[element][styleType]]: {
          ...[element][styleType],
          [name]: value
        }
      }
    }));
  }

  return {
    styles,
    ref,
    updateStyle
  };
}
