import styled, { css } from 'styled-components';
import Avatar from '../Avatar';

export const Box = styled.div`
  background: url('https://source.unsplash.com/1920x1080/?nature') no-repeat center center;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div`
  padding-top: 80px;
  width: 100%;

  ${Avatar.Box} {
    margin-bottom: 30px;
  }

  ul {
    margin-top: 30px;
  }

  ${({ isSecondary }) => isSecondary
    ? css`
      max-width: 800px;
    `
    : css`
      max-width: 420px;
    `
  }
`;