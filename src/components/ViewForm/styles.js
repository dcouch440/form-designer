import styled from "styled-components";

export const DisplayFormDataPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  white-space: pre-wrap;
  overflow-y: auto;
`;

export const Header = styled.h3`
  font-family: sans-serif;
`;

export const JSONText = styled.div`
  font-family: sans-serif;
  color: white;
  padding: 20px;
  width: 700px;
  overflow-x: auto;
  background-color: #2d2d2d;
`;

export const FormContainer = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  background-color: ${({ backgroundColor }) => backgroundColor};
  > * {
    padding: 7px;
  }
`;

export const UserForm = styled.div`
  height: 100%;
  width: 100%;
`;