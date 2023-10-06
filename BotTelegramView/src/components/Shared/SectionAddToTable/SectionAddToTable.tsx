import React from 'react';
import SimpleTable from 'components/Shared/SimpleTable';
import CustomSelect from '../CustomSelect/CustomSelect';
import { IProps } from './SectionAddToTable.types';
import { Container, SelectContainer } from './SectionAddToTable.styles';

const SectionAddToTable = (props: IProps) => {
  const {
    dataset,
    loader,
    config,
    list,
    title,
    value,
    onChange,
    disabled,
    name
  } = props;
  console.log(dataset);
  return (
    <Container>
      <SelectContainer>
        <CustomSelect
          name={name}
          title={title}
          list={list || []}
          value={value || null}
          onChange={onChange}
          disabled={disabled}
        />
      </SelectContainer>
      <SimpleTable dataset={dataset} config={config} loader={loader} />
    </Container>
  );
};

export default SectionAddToTable;
