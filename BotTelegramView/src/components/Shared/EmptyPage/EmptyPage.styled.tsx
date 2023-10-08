import styled from 'styled-components';
import { LIGHT_GRAY } from 'Static/Styles/Colors.index';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 25px;
`;

export const Message = styled.p`
  margin: 0;
  margin-top: 10px;
  padding: 0;
  font-size: 18px;
`;

export const Icon = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;

  & svg {
    fill: ${LIGHT_GRAY};
    width: 250px;
    height: 250px;
  }
`;
