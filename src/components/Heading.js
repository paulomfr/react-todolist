import styled, { css } from 'styled-components';

export const Heading = styled.h2`
  color: #999;
  font-size: 22px;
  font-weight: 700;

  span {
    font-weight: bold;
  }

  /* h1 = 30 */
  ${({ as: tagName }) => (tagName === 'h4' || tagName === 'label') && css`
    font-size: 30px;
  `}
`;