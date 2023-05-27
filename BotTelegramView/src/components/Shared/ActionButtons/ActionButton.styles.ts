import { WHITE } from 'Static/Styles/Colors.index';
import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

interface ButtonProps {
  colorType: string;
}

export const Container = styled.div`
  padding-left: 30px;
  display: inline-flex;
`;

export const StyledButton = styled(IconButton)<ButtonProps>`
  fill: ${WHITE};
  width: auto;
  height: auto;
  padding: 0px 3px;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
  margin-right: 30px;
  & span {
    margin-top: 5px;
    max-height: 25px;
  }
  & .muitouchripple-root {
    display: none;
  }
  ${({ colorType }) =>
    colorType &&
    `
      fill: ${colorType};
      border: 1px solid ${colorType};
      &:hover {
      fill: ${WHITE};
      background: ${colorType};
    }
  `}
`;
