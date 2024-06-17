import React, { FC, useContext } from 'react';
import { Button, Typography } from '@mui/material';
import SimpleTable from '../SimpleTable';
import { IConfig, IDataset } from 'LogicServices/Shared/Types';
import {
  Table,
  Title,
  DataCeil,
  TableContainer,
  Action
} from './ViewTable.styled';
import EditIcon from '@mui/icons-material/Edit';
import { LanguageContext } from 'Static/Lang/Lang.lang';

interface IStepData {
  title: string;
  value: string;
  correction?: boolean;
  isTable?: boolean;
  dataset?: IDataset;
  config?: IConfig[];
}

interface IProps {
  title: string;
  stepData: IStepData[];
  onStepSelected: () => void;
}

const ViewTable: FC<IProps> = ({ title, stepData, onStepSelected }) => {
  const { language } = useContext(LanguageContext);
  return (
    <Table>
      <Title>
        <Typography variant="h4">{title}</Typography>
      </Title>
      {stepData.map((data) =>
        data.isTable ? (
          <TableContainer>
            <SimpleTable
              dataset={data.dataset as IDataset}
              config={data.config as IConfig[]}
              loader={false}
            />
          </TableContainer>
        ) : (
          <DataCeil correction={Boolean(data.correction)}>
            <Typography variant="h6">{data.title}</Typography>
            <Typography>{data.value}</Typography>
          </DataCeil>
        )
      )}
      <Action>
        <Button
          startIcon={<EditIcon />}
          onClick={onStepSelected}
          variant="contained"
        >
          {language.edit}
        </Button>
      </Action>
    </Table>
  );
};

export default ViewTable;
