import React, { useContext } from 'react';
import { Table, TableBody, Box } from '@mui/material';
import TableBodyRow from '../Table/TableBody';
import TableHeader from '../Table/TableHeader';
import TableSkeleton from '../Table/TableSkeleton';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import {
  Container,
  Loader,
  LoaderContainer,
  NoDocumentsFound
} from './SimpleTable.styled';
import { IProps } from './SimpleTable.types';
import { IDataset } from 'LogicServices/Shared/Types';

const TableContent = ({ config, dataset, loader }: IProps) => {
  const { language } = useContext(LanguageContext);
  const SKELETON_ROWS = 3;

  return (
    <Container>
      {loader && (
        <LoaderContainer>
          <Loader size={50} />
        </LoaderContainer>
      )}
      {!loader && !dataset.length && (
        <NoDocumentsFound variant="h4">
          <Box fontWeight={700}>{language.noResultFound}</Box>
        </NoDocumentsFound>
      )}
      <Table>
        <TableHeader config={config} />
        <TableBody>
          {!loader ? (
            dataset.map((document: IDataset, i: number) => (
              <TableBodyRow
                key={`row ${i}`}
                config={config}
                dataset={document}
              />
            ))
          ) : (
            <TableSkeleton config={config} rowsPerPage={SKELETON_ROWS} />
          )}
        </TableBody>
      </Table>
    </Container>
  );
};

export default TableContent;
