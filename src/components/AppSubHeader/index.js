import React from 'react'

import {
  SubHeader
} from './styles';

export default function AppSubHeader ({ title }) {
  return (
    <SubHeader>
      { title }
    </SubHeader>
  );
}
