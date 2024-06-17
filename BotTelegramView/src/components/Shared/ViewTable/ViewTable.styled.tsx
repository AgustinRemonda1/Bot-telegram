import styled from '@emotion/styled';
import { BLUE, SUTIL_GRAY, WHITE } from 'Static/Styles/Colors.index';

interface IPropsContainer {
  correction?: boolean;
}

export const DataCeil = styled.div<IPropsContainer>`
  width: ${({ correction }) => (!correction ? '44%' : '92%')};
  padding: 10px 20px 0;
`;

export const TableContainer = styled.div`
  width: 100%;
  padding: 10px 20px 0;
`;

export const Title = styled.div`
  width: 100%;
  color: ${WHITE};
  background: ${BLUE};
  border-bottom: 1px solid ${SUTIL_GRAY};
  padding: 15px 20px 10px;
  margin-bottom: 20px;
  border-radius: 8px 8px 0 0;
`;

export const Action = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
`;

export const Table = styled.div`
  display: flex;
  width: 60%;
  flex-wrap: wrap;
  border-radius: 10px;
  border: 1px solid ${SUTIL_GRAY};
`;
