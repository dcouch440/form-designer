import SidebarListItem from '../SidebarListItem';

export default function SidebarListItems () {
  const listItems = [
    ['input', 'Input']
  ];

  return (
    listItems.map(([name, text], key) => (
      <SidebarListItem
        key={key}
        name={name}
        text={text}
      />
    ))
  )
}
