import type {InputProps} from '../interfaces/auth/interfaces.ts';

export const checkIsRequairedField = (name: string, propsComponentInputs: InputProps[]): boolean => {

  const findInputName = propsComponentInputs.find(input => input.name === name);
  return findInputName?.isRequired ?? false;
}
