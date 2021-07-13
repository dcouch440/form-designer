import useHover from '../../hooks/useHover';
import {
  ColorBlock,
  DropWindow
} from './styles';

export default function StyleOptionsCurrentColorsBlock ({ color, key, onClick }) {
  const [ref, isHovered] = useHover();
  return (
    <div
      key={key}
    >
      <ColorBlock
        ref={ref}
        backgroundColor={color}
        onClick={onClick}
      />
      {
        isHovered &&
          <DropWindow>
          { color }
          </DropWindow>
      }
    </div>
  )
}
