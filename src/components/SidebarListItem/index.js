import { useDrag } from 'react-dnd'

import {
  ListItem
} from './styles'

export default function SidebarListItem ({ name, text, key }) {

  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: 'BOX',
    item: {
      name, key
    },
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  }))

  return (
    <ListItem 
      ref={dragPreview}
      key={key}
      isDragging={isDragging}
      style={{ opacity: isDragging ? 0.5 : 1, padding: '30px' }}
    >
        {/* The drag ref marks this node as being the "pick-up" node */}
        <div ref={drag}>
          { text }
        </div>
    </ListItem>
  )
  
}
