import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { ORANGE, WHITE } from 'Static/Styles/Colors.index';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15vw;
  height: 15vw;
  cursor: pointer;
  border-radius: 5px;
  svg {
    stroke: ${ORANGE};
    stroke-width: 0.3px;
  }

  &:hover {
    color: ${WHITE};
    background: ${ORANGE};
  }
`;

export const Icon = styled.span`
  margin: 0;
  margin-bottom: -60px;
  width: auto;
  height: auto;
  padding: 0;
  display: flex;
  justify-content: center;
  & svg {
    margin: 0;
    padding: 0;
    width: 75%;
    height: 75%;
  }
`;

export const Text = styled(Typography)`
  text-align: center;
`;
