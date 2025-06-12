import * as React from 'react';

export interface LoginData {
  'email': string,
  'password': string
}

export interface ErrorsInputValueSubmit {
  email?: string,
  password?: string,
  userName?: string,
  userNickName?: string,
  gender?: string,
  repeatPassword?: string
}

export interface ErrorsInputValueChange {
  userNameInvalidValue?: boolean,
  userNickNameInvalidValue?: boolean,
  emailInvalidValue: boolean,
  genderInvalidValue?: boolean,
  passwordInvalidValue: boolean,
  repeatPasswordInvalidValue?: boolean
}

export interface InputProps {
  type: 'text' | 'email' | 'password' | 'radio',
  label: string,
  name: string,
  value: string,
  placeholder?: string,
  description: string,
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  isRequired: boolean,
  icon?: string,
  error?: string,
  emailCharacterError?: boolean,
  passwordCharacterError?: boolean,
  repeatPasswordCharacterError?: boolean,
  variant?: 'default' | 'filled' | 'unstyled',
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export interface PropsInputWrapper {
  inputProps: InputProps;
}

export interface UserProps {
  name: string,
  password: string
}

export interface AuthContext {
  user: UserProps | null,
  signin: (newUser: { name: string, password: string }, callback: () => void) => void,
  signout: (callback?: () => void) => void
}

export interface WithChildren {
  children: React.ReactNode
}
