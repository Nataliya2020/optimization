import type {
  LoginData,
  ErrorsInputValueSubmit,
  InputProps,
  ErrorsInputValueChange
} from '../../../core/interfaces/auth/interfaces.ts';
import {useState} from 'react';
import * as React from 'react';
import {
  checkingPasswordLength,
  fullnessCheck,
  validateInput,
  verificationEmail
} from '../../../core/validation/validation.ts';
import Button from '../../../ui/Button';
import Input from '../../../ui/Input';
import styles from './index.module.css';
import {checkIsRequairedField} from '../../../core/utils/checkIsRequairedField.ts';
import {useLocation, useNavigate} from 'react-router-dom';
import {useAuth} from '../../../hooks/useAuth.tsx';

export const Signin = () => {

  const [loginValues, setLoginValues] = useState<LoginData>({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<ErrorsInputValueSubmit>({
    email: '',
    gender: '',
    password: '',
    repeatPassword: '',
    userName: '',
    userNickName: ''
  });

  const [isInvalidValue, setIsInvalidValue] = useState<ErrorsInputValueChange>({
    emailInvalidValue: true,
    passwordInvalidValue: false,
    repeatPasswordInvalidValue: false
  });

  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();

  const from = location.state?.from || "/";

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const {name, value} = event.target;

    setErrors((prev) => ({
      ...prev, [event.target.name]: null
    }));

    setLoginValues((prev) => ({
      ...prev, [event.target.name]: event.target.value
    }));

    const propsFIeld: InputProps[] = [
      inputPropsEmail, inputPropsPassword]

    const isRequaired: boolean = checkIsRequairedField(name, propsFIeld);

    validateInput(event, value, isRequaired, setIsInvalidValue);
  }

  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const errorsAfterChecking: ErrorsInputValueSubmit = {};

    if (inputPropsEmail.isRequired || loginValues.email.trim() !== '') {
      const emailError = fullnessCheck(loginValues.email) || verificationEmail(loginValues.email);

      if (emailError) {
        errorsAfterChecking.email = emailError;
      }
    }

    if (inputPropsPassword.isRequired || loginValues.password.trim() !== '') {
      const passwordError = fullnessCheck(loginValues.password) || checkingPasswordLength(loginValues.password);
      if (passwordError) {
        errorsAfterChecking.password = passwordError;
      }
    }

    setErrors(errorsAfterChecking);

    if (Object.keys(errorsAfterChecking).length === 0 && auth !== null) {
      auth.signin({
        name: loginValues.email,
        password: loginValues.password
      }, () => {
        navigate(from, {replace: true});
      });

      setLoginValues({email: '', password: ''});
      setIsInvalidValue({
        emailInvalidValue: true,
        passwordInvalidValue: false
      })
    }
  }

  const inputPropsEmail: InputProps = {
    type: 'email',
    label: 'Ваш email',
    name: 'email',
    value: loginValues.email,
    placeholder: 'Введите email сюда',
    description: 'Введите Ваш email',
    size: 'xs',
    radius: 'xs',
    isRequired: true,
    error: errors.email, // для отображения ошибок по нажатию на submit
    emailCharacterError: isInvalidValue.emailInvalidValue, // для отображения вводимого в поле значения, с изменением цвета
    variant: 'default',
    onChange: handleLoginChange,
  }

  const inputPropsPassword: InputProps = {
    type: 'password',
    label: 'Ваш пароль',
    name: 'password',
    value: loginValues.password,
    placeholder: 'Введите пароль сюда',
    description: 'Введите Ваш пароль от 8 символов',
    size: 'xs',
    radius: 'xs',
    isRequired: true,
    error: errors.password,// для отображения ошибок по нажатию на submit
    passwordCharacterError: isInvalidValue.passwordInvalidValue, // для отображения вводимого в поле значения, с изменением цвета
    variant: 'default',
    onChange: handleLoginChange
  }

  return (
    <form
      className={styles.form_container}
      onSubmit={handleLoginSubmit}
      noValidate
    >
      <Input inputProps={inputPropsEmail}/>
      <Input inputProps={inputPropsPassword}/>
      <Button/>
    </form>
  )
}
