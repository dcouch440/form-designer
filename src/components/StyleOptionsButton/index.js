import React from 'react'

import {
  ButtonGrid,
  SelectionButton
} from './styles';

export default function StyleOptionsButton ({ elementTypes, onClick, span, activeButton }) {
  return (
    <ButtonGrid>
      {
        elementTypes.map(({ set, buttonText }, index) => {
          const isActive = set === activeButton;
          return (
            <SelectionButton
              key={index}
              span={span}
              isActive={isActive}
              onClick={() => onClick(set)}
            >
              { buttonText }
            </SelectionButton>
          )
        })
      }
    </ButtonGrid>
  )
}
