import React from 'react'

import {
  StyledButton
} from './styles';

export default function AppButton ({ onClick, text, backgroundColor }) {
  return (
    <StyledButton backgroundColor={backgroundColor} onClick={onClick}>
      {text}
    </StyledButton>
  );
}
