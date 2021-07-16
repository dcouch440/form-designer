import SidebarListItems from '../SidebarListItems';

import {
  SidebarContainer,
  SidebarHeader
} from './styles';

export default function Sidebar () {
  return (
    <SidebarContainer>
      <SidebarHeader>Drag Your Selection</SidebarHeader>
      <SidebarListItems />
    </SidebarContainer>
  );
}
