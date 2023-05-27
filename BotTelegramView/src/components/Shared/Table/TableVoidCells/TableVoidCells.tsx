import React from 'react';
import { TableCell, TableRow } from '@mui/material';

interface IProps {
  emptyRows: number;
}

const TableVoidCells = ({ emptyRows }: IProps) => (
  <>
    {emptyRows > 0 && (
      <TableRow style={{ height: 53 * emptyRows }}>
        <TableCell colSpan={15} />
      </TableRow>
    )}
  </>
);

export default TableVoidCells;
