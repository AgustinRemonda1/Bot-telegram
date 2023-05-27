import React, { useContext } from 'react';
import { Table, TableBody, Box, useTheme, Paper } from '@mui/material';
import TableBodyRow from '../Table/TableBody';
import TableHeader from '../Table/TableHeader';
import TableSkeleton from '../Table/TableSkeleton';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import {
  Container,
  Loader,
  LoaderContainer,
  NoDocumentsFound
} from '../Table/Table.styles';
import { IProps } from './SimpleTable.types';

const TableContent = ({ config, dataset, loader }: IProps) => {
  const { language } = useContext(LanguageContext);
  const theme = useTheme();
  const SKELETON_ROWS = 3;

  return (
    <Container theme={theme} component={Paper}>
      {loader && (
        <LoaderContainer theme={theme}>
          <Loader size={50} />
        </LoaderContainer>
      )}
      {!loader && !dataset.length && (
        <NoDocumentsFound theme={theme} variant="h4">
          <Box fontWeight={700}>{language.noResultFound}</Box>
        </NoDocumentsFound>
      )}
      <Table>
        <TableHeader config={config} />
        <TableBody>
          {!loader ? (
            dataset.map((document: any, i: number) => (
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
