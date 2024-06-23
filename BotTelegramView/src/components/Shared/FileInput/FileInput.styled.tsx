import styled from '@emotion/styled';
import {
  DARK_ORANGE,
  ORANGE,
  BLACK,
  RED_ALERT
} from 'Static/Styles/Colors.index';
import { Typography, FormControl } from '@mui/material';

interface IPropsContainer {
  correction: boolean;
}

export const Container = styled.div<IPropsContainer>`
  width: ${({ correction }) => (!correction ? '44%' : '92%')};
`;

export const FileInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: -0.25px;
  & div {
    margin-left: 1rem;
  }
`;

export const InputFormControl = styled(FormControl)`
  width: 100%;
  margin-top: 20px;
`;

export const InputLabel = styled(Typography)`
  display: flex;
  flex-direction: column;
  color: ${BLACK};
`;

export const InputLabelAlert = styled(Typography)`
  font-size: 15px;
  color: ${RED_ALERT};
`;
export const UploadInput = styled.input`
  display: none;
`;

export const ButtonUploadFile = styled.label<{ flat?: boolean }>`
  text-transform: uppercase;
  margin-right: 1.1em;
  margin-bottom: ${({ flat }) => (flat ? '0.5em' : '0.8em')};
  font-size: 0.9rem;
  font-weight: 800;
  border-radius: 4px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  transition: 0.2s;
  padding: ${({ flat }) => (flat ? '1em 0' : '1.18em 0.75em')};
  border: ${({ flat }) => !flat && `1.5px solid ${ORANGE}`};
  color: ${ORANGE};
  cursor: pointer;
  svg {
    fill: ${ORANGE};
    stroke: ${ORANGE};
  }

  background-color: transparent;

  &:hover {
    color: ${DARK_ORANGE};
    border-color: ${DARK_ORANGE};
  }
`;
