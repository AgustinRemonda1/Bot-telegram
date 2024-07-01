import React from 'react';
import { TableCell, TableRow, Box } from '@mui/material';
import CheckAction from '../../Checkbox/CheckAction';
import ActionButton from '../../ActionButtons/ActionButton';
import { renderCell } from './TableBody.utils';
import { IConfig, IDataset } from 'LogicServices/Shared/Types';

export interface IProps {
  config: IConfig[];
  dataset: IDataset;
}

const TableBodyRow = ({ config, dataset }: IProps) => {
  return (
    <TableRow>
      {config &&
        config.map((cell: IConfig, i: number) => (
          <TableCell key={`body cell ${i}`} align={'' || cell.align}>
            {!cell.isCheck && !cell.isActions ? (
              <Box fontWeight={400}>{renderCell(cell, dataset)}</Box>
            ) : cell.isCheck ? (
              <CheckAction
                id={dataset && dataset.id}
                check={Boolean(dataset[cell.property])}
                onChange={cell.onClick}
              />
            ) : (
              cell.actions && (
                <ActionButton dataset={dataset} actions={cell.actions} />
              )
            )}
          </TableCell>
        ))}
    </TableRow>
  );
};

export default TableBodyRow;
