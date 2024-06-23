import CustomInput from '../CustomInputs/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import FileInput from '../FileInput';

export const inputTypes = [
  {
    type: 'select',
    input: CustomSelect
  },
  {
    type: 'text',
    input: CustomInput
  },
  {
    type: 'file',
    input: FileInput
  }
];
