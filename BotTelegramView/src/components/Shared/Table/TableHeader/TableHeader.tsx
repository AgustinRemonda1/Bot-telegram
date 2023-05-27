import React from 'react';
import { TableCell, TableHead, TableRow, Box } from '@mui/material';

export interface IProps {
  config: any;
}

const TableHeader = ({ config }: IProps) => (
  <TableHead>
    <TableRow>
      {config.map((header: any, i: number) => (
        <TableCell key={`header cell ${i}`} align={'' || header.align}>
          <Box fontWeight={700}>{header.name && header.name.toUpperCase()}</Box>
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

export default TableHeader;
