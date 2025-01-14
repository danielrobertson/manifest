import * as React from 'react';
import { useTextField } from '@react-aria/textfield';
import { chain, mergeProps, mergeRefs, useLayoutEffect } from '@react-aria/utils';
import { useControlledState } from '@react-stately/utils';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Props } from '../../system';
import { TextFieldBase, TextFieldBaseElement, TextFieldBaseOptions } from '../TextFieldBase';
import { useStyles } from './TextArea.styles';

export interface TextAreaOptions<T extends As = TextFieldBaseElement>
  extends TextFieldBaseOptions<T> {
  /**
   * The default value (uncontrolled).
   */
  defaultValue?: string;
  /**
   * Temporary text that occupies the text input when it is empty.
   */
  placeholder?: string;
  /**
   * The current value (controlled).
   */
  value?: string;
  /**
   * Handler that is called when the value changes.
   */
  onChange?: (value: string) => void;
}

export type TextAreaProps<T extends As = TextFieldBaseElement> = Props<TextAreaOptions<T>>;

export const TextArea = createComponent<TextAreaOptions>((props, forwardedRef) => {
  const {
    className: classNameProp,
    helperTextProps = {},
    inputProps: inputPropsProp = {},
    inputRef,
    labelProps: labelPropsProp = {},
    onChange,
    ...other
  } = props;

  const areaRef = React.useRef<HTMLTextAreaElement>(null);

  const [inputValue, setInputValue] = useControlledState(props.value, props.defaultValue, () => {
    // noop
  });

  const handleHeightChange = React.useCallback(() => {
    const input = areaRef.current!;

    const prevAlignment = input.style.alignSelf;

    input.style.alignSelf = 'start';
    input.style.height = 'auto';
    input.style.height = `${input.scrollHeight}px`;
    input.style.alignSelf = prevAlignment;
  }, [areaRef]);

  const { inputProps, descriptionProps, errorMessageProps, labelProps } = useTextField(
    { ...props, inputElementType: 'textarea', onChange: chain(onChange, setInputValue) },
    areaRef,
  );

  const { className } = useStyles();

  const classes = cx(className, classNameProp, {
    'manifest-textarea': true,
  });

  useLayoutEffect(() => {
    if (areaRef.current) {
      handleHeightChange();
    }
  }, [handleHeightChange, inputValue, areaRef]);

  return (
    <TextFieldBase
      {...other}
      ref={forwardedRef}
      multiline
      className={classes}
      helperTextProps={mergeProps(descriptionProps, errorMessageProps, helperTextProps)}
      inputProps={mergeProps(inputProps, inputPropsProp)}
      inputRef={
        mergeRefs(areaRef, inputRef as typeof areaRef) as React.RefObject<HTMLTextAreaElement>
      }
      labelProps={mergeProps(labelProps, labelPropsProp)}
    />
  );
});
