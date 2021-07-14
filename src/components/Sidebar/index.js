import React from 'react'
import SidebarListItems from '../SidebarListItems';

import {
  SidebarContainer
} from './styles';

export default function Sidebar () {
  return (
    <SidebarContainer>
      <SidebarListItems />
    </SidebarContainer>
  );
}
