import styled from "styled-components";

export const ButtonGrid = styled.div`
  display: grid;
  grid-gap: '7px';
  margin-bottom: 10px;
  grid-template-columns: repeat(4, 1fr);
`;

export const SelectionButton = styled.button`
  transition: 0.2s;
  height: 100px;
  grid-column: ${({span}) => span ? 'span ' + span : null};
  background-color: ${({isActive}) => isActive ? '#00bcd4' : '#9e9e9e'};
  color: ${({isActive}) => isActive ? 'white' : 'black'};
  font-weight: 500;
  font-size: ${({isActive}) => isActive ? '16px' : '15px'};
  font-family: sans-serif;
  border-radius: 7px;
  box-shadow: inset 0px 0px 4px 3px black;
  border: none;
  :hover {
    color: white;
    background-color: black;
    box-shadow: inset 0px 0px 2px white, 0px 0px 2px white;
  }
`;