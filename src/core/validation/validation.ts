import * as React from 'react';
import type {ErrorsInputValueChange} from '../interfaces/auth/interfaces.ts';

export const fullnessCheck = (value: string | undefined): string | null => {

  if (typeof value === 'string') {
    return value.trim() === '' ? 'Поле не может быть пустым' : null;
  }
  return 'Поле не может быть пустым';
}

export const verificationEmail = (value: string): string | null => {
  const regExp: boolean = /^[\w.\-+%]+@[\w.\-+%]+\.[\w]{2,}$/.test(value);
  return !regExp ? 'Введите корректный email' : null;
}
export const checkingPasswordLength = (password: string): string | null => {
  return password.length < 8 ? 'Длина пароля должна быть от 8 символов' : null;
}

export const validateInput = (
  e: React.ChangeEvent<HTMLInputElement>,
  value: string, isRequaired: boolean,
  setIsInvalidValue: (React.Dispatch<React.SetStateAction<ErrorsInputValueChange>>)) => {

  if (e.target.name === 'email' && (value.length !== 0 || isRequaired)) {
    if (!verificationEmail(e.target.value)) {
      setIsInvalidValue((prev: ErrorsInputValueChange) => ({
        ...prev, emailInvalidValue: false
      }))
    } else {
      setIsInvalidValue((prev: ErrorsInputValueChange) => ({
        ...prev, emailInvalidValue: true
      }));
    }
  }

  if (e.target.name === 'password' && (value.length !== 0 || isRequaired)) {
    if (e.target.value.length === 0 || e.target.value.length >= 8) {
      setIsInvalidValue((prev) => ({
        ...prev, passwordInvalidValue: false
      }));
    } else {
      setIsInvalidValue((prev) => ({
        ...prev, passwordInvalidValue: true
      }))
    }
  }
}
