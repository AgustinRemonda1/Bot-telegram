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
        correction={input.correction}
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
      emptyFields={input.emptyFields}
      correction={input.correction}
      disabled={input.disabled}
      multiline={input.multiline}
    />
  );
};
