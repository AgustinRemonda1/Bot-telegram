import React, { useContext } from 'react';
import { Paper, Table, TableBody, TablePagination, Box } from '@mui/material';
import TableBodyRow from './TableBody';
import TableHeader from './TableHeader';
import TableSkeleton from './TableSkeleton';
import TableVoidCells from './TableVoidCells';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import { ModalControllerContext } from 'components/HOC/ModalController';
import {
  Container,
  Loader,
  LoaderContainer,
  NoDocumentsFound
} from './Table.styled';
import { IProps } from './Table.types';
import useTable from './useTable';
import { IDataset } from 'LogicServices/Shared/Types';

const CustomTable = ({
  loader,
  totalRows,
  dataset,
  config,
  onChangePage,
  onRefreshTable,
  refreshTable
}: IProps) => {
  const { language } = useContext(LanguageContext);
  const { isOpenDrawer } = useContext(ModalControllerContext);
  const { state, actions } = useTable({
    loader,
    refreshTable,
    onChangePage,
    onRefreshTable,
    dataset
  });

  return (
    <Container isOpenDrawer={isOpenDrawer} component={Paper}>
      {loader && (
        <LoaderContainer isOpenDrawer={isOpenDrawer}>
          <Loader size={50} />
        </LoaderContainer>
      )}
      {!loader && !dataset.length && (
        <NoDocumentsFound isOpenDrawer={isOpenDrawer} variant="h4">
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
            <TableSkeleton
              config={config}
              rowsPerPage={
                state.withPagination ? state.rowsPerPage : dataset.length
              }
            />
          )}
          {state.withPagination && (
            <TableVoidCells emptyRows={state.emptyRows} />
          )}
        </TableBody>
      </Table>
      {state.withPagination && (
        <TablePagination
          rowsPerPageOptions={state.rowsPerPageOptions}
          count={totalRows}
          rowsPerPage={state.rowsPerPage}
          page={state.page}
          backIconButtonProps={{ disabled: Boolean(state.page <= 0) }}
          onPageChange={actions.onPageChange}
          onRowsPerPageChange={actions.onRowsPerPageChange}
          labelRowsPerPage={language.rowsPerPage}
          component="div"
        />
      )}
    </Container>
  );
};

export default CustomTable;
