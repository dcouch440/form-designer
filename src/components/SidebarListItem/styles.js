import styled from "styled-components";

export const ListItem = styled.div`
  cursor: pointer;
  transition: 0.2s;
  color: black;
  text-align: center;
  background-color: #00bcd4;
  margin: 7px;
  border-radius: 7px;
  color: white;
  font-weight: 900;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: inset 0px 0px 4px 3px black;
  border: 2px solid black;
  opacity: ${({ isDragging })=> isDragging ? 0.5 : 1};
  :hover {
    color: white;
    background-color: black;
    box-shadow: inset 0px 0px 2px white, 0px 0px 2px white;
  }
`;