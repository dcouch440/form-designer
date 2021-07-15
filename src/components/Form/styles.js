import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
  flex: 10;
  display: grid;
  grid-auto-rows: min-content;
  background-color: ${({ backgroundColor }) => backgroundColor};
  > * {
    padding: 7px;
  }
`;