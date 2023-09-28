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

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1em 1em;
  background: rgba(0, 0, 0, 0.05);
  width: 320px;
`;
