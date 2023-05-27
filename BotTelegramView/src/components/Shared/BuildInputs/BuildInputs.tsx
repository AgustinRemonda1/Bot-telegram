import React from 'react';
import { IProps } from './BuildInput.types';
import { findTypeAndBuild } from './BuildInput.utils';

const BuildInputs = ({ input }: IProps): JSX.Element => {
  return findTypeAndBuild(input);
};

export default BuildInputs;
