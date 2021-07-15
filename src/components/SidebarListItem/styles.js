import styled from "styled-components";

export const ListItem = styled.div`
  color: black;
  text-align: center;
  background-color: #00bcd4;
  margin: 7px;
  border-radius: 7px;
  color: white;
  font-weight: 900;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 0 3px black;
  border: 2px solid black;
  opacity: ${({isDragging})=> isDragging ? 0.5 : 1};
`;