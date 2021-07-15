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
`;

export const ModalContent = styled.div`
  padding: 30px;
  width: 1000px;
  height: 700px;
  z-index: 2;
  background-color: #2d2d2d;
  color: white;
`;