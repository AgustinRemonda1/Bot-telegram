import React from 'react';
import { IInput } from './BuildInput.types';
import { inputTypes } from './BuildInput.config';

export const findTypeAndBuild = (input: IInput): JSX.Element => {
  const findType = inputTypes.find((type) => type.type === input.type);
  const defaultType = inputTypes[1];

  return !findType ? (
    defaultType && (
      <defaultType.input
        name={input.name}
        title={input.title}
        onChange={input.onChange}
        value={input.value}
        emptyFields={input.emptyFields}
        list={[]}
        fileValues={input.fileValues}
        fileTargets={input.fileTargets}
        correction={Boolean(input.correction)}
        disabled={input.disabled}
        multiline={input.multiline}
      />
    )
  ) : (
    <findType.input
      name={input.name}
      title={input.title}
      onChange={input.onChange}
      value={input.value}
      list={(input && input.list) || []}
      fileValues={input.fileValues}
      fileTargets={input.fileTargets}
      emptyFields={input.emptyFields}
      correction={Boolean(input.correction)}
      disabled={input.disabled}
      multiline={input.multiline}
    />
  );
};
