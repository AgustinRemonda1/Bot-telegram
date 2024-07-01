import styled from '@emotion/styled';

export const TableSeparators = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: 50%;
  align-items: center;
  & > div:nth-last-child(odd) {
    margin-top: 30px;
  }
`;
