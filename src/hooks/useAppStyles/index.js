import { useContext } from 'react';
import { Context } from '../../Context';
import useHover from '../useHover';

export default function useAppStyles ({ element, elementStyleVersion }) {
  const [ref, isHovered] = useHover();
  const { appStyles, setAppStyles } = useContext(Context);

  const styles = isHovered ? Object
    .assign(
      {},
      appStyles[element]['nonHovered'],
      appStyles[element]['hovered']
    )
    :
    appStyles[element]['nonHovered'];

  const updateStyle = ({ name, value }) => {

    setAppStyles(prev => {
      return {
        ...prev,
        [element]: {
          ...prev[element],
          [elementStyleVersion]: {
            ...prev[element][elementStyleVersion],
            [name]: value
          }
        }
      };
    });
  };

  return {
    appStyles,
    styles,
    ref,
    updateStyle
  };
}
