import SidebarListItem from '../SidebarListItem';

export default function SidebarListItems () {
  const listItems = [
    ['input', 'Input'],
    ['multipleChoice', 'Multiple Choice'],
  ];

  return (
    listItems.map(([name, text], index) => (
      <SidebarListItem
        key={index}
        name={name}
        text={text}
      />
    ))
  );
}
