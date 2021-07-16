import styled from "styled-components";

export const ButtonGrid = styled.div`
  display: grid;
  grid-gap: '7px';
  margin-bottom: 10px;
  grid-template-columns: ${({ columns }) => columns ? `repeat(${columns}, 1fr)` : 'repeat(4, 1fr)'};
`;

export const SelectionButton = styled.button`
  transition: 0.2s;
  cursor: pointer;
  font-weight: 500;
  font-family: sans-serif;
  border-radius: 7px;
  box-shadow: inset 0px 0px 4px 3px black;
  border: none;
  height: ${({ slim }) => slim ? '50px' : '100px'};
  font-size: ${({ isActive, slim }) => slim ? '12px' : isActive ? '16px' : '15px'};
  color: ${({ isActive }) => isActive ? 'white' : 'black'};
  background-color: ${({ isActive }) => isActive ? '#00bcd4' : '#9e9e9e'};
  grid-column: ${({ span }) => span ? 'span ' + span : null};
  :hover {
    color: white;
    background-color: black;
    box-shadow: inset 0px 0px 2px white, 0px 0px 2px white;
  }

`;