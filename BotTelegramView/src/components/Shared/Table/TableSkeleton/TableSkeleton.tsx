import React from 'react';
import { TableCell, TableRow } from '@mui/material';
import Skeleton from '@mui/lab/Skeleton';
import { generateRows } from './TableSkeleton.utils';
import { SkeletonContainer } from './TableSkeleton.styles';
import { IConfig } from 'LogicServices/Shared/Types';

export interface IProps {
  rowsPerPage: number;
  config: IConfig[];
}

const TableSkeleton = ({ config, rowsPerPage }: IProps) => (
  <>
    {generateRows(rowsPerPage).map((item: IConfig, index: number) => (
      <TableRow key={`skeletonRow ${index}`}>
        {config.map((cell: IConfig, i: number) => (
          <TableCell key={`skeleton cell ${i}`}>
            <SkeletonContainer>
              <Skeleton variant="text" animation="wave" />
            </SkeletonContainer>
          </TableCell>
        ))}
      </TableRow>
    ))}
  </>
);

export default TableSkeleton;
