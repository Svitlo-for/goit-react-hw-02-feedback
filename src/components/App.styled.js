import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  border-radius: 3px;

  margin-right: 10px;
  padding: 0.25em 1em;
  &[name="good"]: hover {
    border: 2px solid green;
  }
  &[name="neutral"]: hover {
    border: 2px solid orange;
  }
  &[name="bad"]: hover {
    border: 2px solid tomato;
  }
`;
