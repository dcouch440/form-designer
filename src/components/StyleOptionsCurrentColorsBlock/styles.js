import styled from 'styled-components';

export const ColorBlock = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 25px;
  border: 2px solid black;
  box-shadow: 0 0 1px white;
  position: relative;
`;

export const DropWindow = styled.div`
  position: absolute;
  z-index: 2;
  background-color: black;
  padding: 5px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;