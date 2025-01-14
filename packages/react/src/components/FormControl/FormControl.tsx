import * as React from 'react';
import type { Validation } from '@react-types/shared';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '../../system';
import type { StyleProps } from '../../types';
import { Typography } from '../Typography';
import { useStyles } from './FormControl.styles';

export type FormControlElement = 'div';

export interface FormControlOptions<T extends As = FormControlElement>
  extends Options<T>,
    StyleProps,
    Validation {
  /**
   * Helper text appended to the input element.
   */
  helperText?: React.ReactNode;
  /**
   * Props passed to the helper text element.
   */
  helperTextProps?: React.HTMLAttributes<HTMLElement>;
  /**
   * Whether user input is required on the input before form submission.
   *
   * @default true
   */
  isRequired?: boolean;
  /**
   * The label for the form control input element.
   */
  label?: React.ReactNode;
  /**
   * Props passed to the label element.
   */
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  /**
   * The layout orientation of the form control.
   *
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical';
}

export type FormControlProps<T extends As = FormControlElement> = Props<FormControlOptions<T>>;

export const FormControl = createComponent<FormControlOptions>((props, forwardedRef) => {
  const {
    children,
    className: classNameProp,
    css,
    helperText,
    helperTextProps = {},
    isRequired = true,
    label,
    labelProps = {},
    orientation = 'vertical',
    validationState,
    ...other
  } = props;

  const isInvalid = validationState === 'invalid';

  const { className } = useStyles({ css, isInvalid, orientation });

  return (
    <div
      {...other}
      ref={forwardedRef}
      className={cx(className, classNameProp, 'manifest-form-control')}
    >
      {label && (
        <Typography
          as="label"
          className="manifest-form-control__label"
          variant="subtextBold"
          {...labelProps}
        >
          {label}
          {!isRequired && (
            <span aria-hidden className="manifest-form-control__required-indicator">
              (optional)
            </span>
          )}
        </Typography>
      )}

      {children}

      {helperText && (
        <Typography
          className="manifest-form-control__helper-text"
          variant="caption"
          {...helperTextProps}
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
});
