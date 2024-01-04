import React from 'react';
import { TableCell, TableHead, TableRow, Box } from '@mui/material';
import { IConfig } from 'LogicServices/Shared/Types';

export interface IProps {
  config: IConfig[];
}

const TableHeader = ({ config }: IProps) => (
  <TableHead>
    <TableRow>
      {config.map((header: IConfig, i: number) => (
        <TableCell key={`header cell ${i}`} align={'' || header.align}>
          <Box fontWeight={700}>{header.name && header.name.toUpperCase()}</Box>
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

export default TableHeader;
