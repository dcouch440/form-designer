import { useDrag } from 'react-dnd';

import {
  ListItem
} from './styles';

export default function SidebarListItem ({ name, text, ket }) {
  const [{ isDragging }, drag, dragRef] = useDrag(() => ({
    type: 'BOX',
    item: {
      name
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  }));

  return (
    <ListItem
      ref={dragRef}
      key={ket}
      isDragging={isDragging}
      style={{ opacity: isDragging ? 0.5 : 1, padding: '30px' }}
    >
      <div ref={drag}>
        { text }
      </div>
    </ListItem>
  );
}
