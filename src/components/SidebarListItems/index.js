import SidebarListItem from '../SidebarListItem';

export default function SidebarListItems () {
  const listItems = [
    ['input', 'Input'],
    ['multipleChoice', 'multipleChoice'],
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
