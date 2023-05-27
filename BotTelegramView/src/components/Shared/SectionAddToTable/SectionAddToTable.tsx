import React from 'react';
import SimpleTable from '../SimpleTable/SimpleTable.component';
import CustomSelect from '../CustomSelect/CustomSelect';
import { IProps } from './SectionAddToTable.types';
import { Container, SelectContainer } from './SectionAddToTable.styles';

const SectionAddToTable = (props: IProps) => {
  const { dataset, loader, config, list, title, value, onChange, disabled } =
    props;

  return (
    <Container>
      <SelectContainer>
        <CustomSelect
          name={'simpleTableSelect'}
          title={title}
          list={list}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </SelectContainer>
      <SimpleTable dataset={dataset} config={config} loader={loader} />
    </Container>
  );
};

export default SectionAddToTable;
