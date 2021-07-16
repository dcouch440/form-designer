import styled from 'styled-components';

export const TextInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  width: 250px;
  height: 30px;
`;

export const InputContainer = styled.div`
  width: 100%;
  color: ${({ color }) => color};
`;