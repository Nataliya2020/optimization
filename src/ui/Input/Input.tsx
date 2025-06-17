import {type FC} from 'react';
import type {PropsInputWrapper} from '../../core/interfaces/auth/interfaces.ts';
import styles from './Input.module.css';

export const Input: FC<PropsInputWrapper> = ({inputProps}) => {
  const {
    type,
    name,
    label,
    value,
    placeholder,
    description,
    size,
    radius,
    isRequired,
    icon,
    error,
    emailCharacterError,
    passwordCharacterError,
    repeatPasswordCharacterError,
    variant,
    onChange,
  } = inputProps;

  const inputRadiusStyle = {
    xs: styles.radius_xs,
    sm: styles.radius_sm,
    md: styles.radius_md,
    lg: styles.radius_lg,
    xl: styles.radius_xl
  }

  const variantStyles = {
    default: styles.default,
    filled: styles.filled,
    unstyled: styles.unstyled
  };

  const styleInput = variant ? variantStyles[variant] : styles.default;

  if (type === 'radio') {
    return (
      <div className={`${styles.container_input} ${styles[`size_${size}`]}`}>
        <span>
          {label}
          {isRequired && <span className={styles.required}>*</span>}
        </span>
        <p className={styles.container_input_desc}>{description}</p>
        <div>
          <div>
            <input
              id={`${name}-female`}
              type="radio"
              name={name}
              value='female'
              checked={String(value) === 'female'}
              onChange={onChange}
            />
            <label htmlFor={`${name}-female`} className={styles.radio_label}>Женский</label>
          </div>
          <div>
            <input
              id={`${name}-male`}
              type="radio"
              name={name}
              value='male'
              checked={String(value) === 'male'}
              onChange={onChange}
            />
            <label htmlFor={`${name}-male`} className={styles.radio_label}>Мужской</label>
          </div>
        </div>
        {error &&
          <div className={styles.container_error}><span className={styles.submit_error}>{error}</span></div>}
      </div>
    )
  } else {
    return (
      <label className={`${styles.container_input} ${styles[`size_${size}`]}`}>
        {label && (
          <span>
      {label}
            {isRequired && <span className={styles.required}>*</span>}
      </span>
        )}
        <p className={styles.container_input_desc}>{description}</p>
        {icon ? (
            <div className={styles.input_with_icon}>
              <span className={styles.icon_wrapper}>{icon}</span>
              <input type={type} name={name}
                     className={`${styleInput} ${radius && inputRadiusStyle[radius]} ${styles.input}`}
                     value={value}
                     placeholder={placeholder}
                     required={isRequired} onChange={onChange}/>
            </div>
          )
          : (<input type={type} name={name}
                    className={`${styleInput} ${radius && inputRadiusStyle[radius]} ${styles.input}`}
                    value={value}
                    placeholder={placeholder}
                    required={isRequired} onChange={onChange}/>
          )}
        {type === "email" && <span className={emailCharacterError
          ? styles.submit_error
          : styles.submit_valid}>{value}</span>}
        {type === "password"
          && name === "password"
          && passwordCharacterError
          && <span className={styles.submit_error}>Пароль должен быть 8 символов и более</span>}
        {type === "password"
          && name === "repeatPassword"
          && repeatPasswordCharacterError
          && <span className={styles.submit_error}>Пароли не совпадают</span>}
        {error &&
          <div className={styles.container_error}><span className={styles.submit_error}>{error}</span></div>}
      </label>
    )
  }
}
