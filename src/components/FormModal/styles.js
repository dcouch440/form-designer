import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000047;
  box-shadow: inset 0 0 20px black;
  h3 {
    font-family: sans-serif;
  }
  input {
    border-radius: 7px;
    box-shadow: inset 0 0 1px black, 0 0 1px white;
    border: 2px solid white;
    width: 50%;
    padding: 5px;
    margin-bottom: 7px;
  }
  button {
    transition: 0.2s;
    cursor: pointer;
    padding: 7px;
    border-radius: 7px;
    border: 2px solid black;
    background-color: #00bcd4;
    :hover {
      background-color: black;
      color: white;
    }
  }
`;

export const ModalContent = styled.div`
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 0 10px black;
  width: 1000px;
  height: 700px;
  z-index: 2;
  background-color: #2d2d2d;
  color: white;
`;