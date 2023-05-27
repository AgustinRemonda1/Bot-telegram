import React from 'react';
import { TableCell, TableRow } from '@mui/material';
import Skeleton from '@mui/lab/Skeleton';
import { generateRows } from './TableSkeleton.utils';
import { SkeletonContainer } from './TableSkeleton.styles';

export interface IProps {
  rowsPerPage: number;
  config: any;
}

const TableSkeleton = ({ config, rowsPerPage }: IProps) => (
  <>
    {generateRows(rowsPerPage).map((item: any, index: number) => (
      <TableRow key={`skeletonRow ${index}`}>
        {config.map((cell: any, i: number) => (
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
