import styled from 'styled-components';

export const Box = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  overflow: hidden;

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }
`;