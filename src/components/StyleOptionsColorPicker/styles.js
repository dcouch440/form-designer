import styled from "styled-components";

export const ButtonContainer = styled.div`
  margin: 5px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const SelectButton = styled.button`
  border: 2px solid black;
  cursor: pointer;
  transition: 0.2s;
  z-index: 345;
  width: 120px;
  height: 60px;
  border-radius: 7px;
  :hover {
    background-color: black;
    color: white;
  }
`;