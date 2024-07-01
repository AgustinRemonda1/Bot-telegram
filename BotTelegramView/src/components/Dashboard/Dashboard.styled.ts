import styled from '@emotion/styled';
import { Card, Container } from '@mui/material';
import { theme } from 'Static/Theme';

export const SectionContainer = styled.div`
  width: 100%;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;

  & div {
    margin-bottom: 20px;
  }
  & div:last-child {
    margin-right: 0px;
  }
`;

export const StatisticCard = styled(Card)`
  margin-right: 30px;
  width: 100%;
  padding: 5px;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  & div {
    display: flex;
    height: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    margin-bottom: 35px;
  }
`;
