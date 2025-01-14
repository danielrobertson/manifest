import * as React from 'react';
import { useButton } from '@react-aria/button';
import { useDateRangePicker } from '@react-aria/datepicker';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useOverlayPosition } from '@react-aria/overlays';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { useDateRangePickerState } from '@react-stately/datepicker';
import type { DateValue } from '@react-types/calendar';
import type { AriaDateRangePickerProps } from '@react-types/datepicker';
import { Calendar as CalendarIcon } from '@project44-manifest/react-icons';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '../../system';
import type { StyleProps } from '../../types';
import { CalendarRange } from '../CalendarRange';
import { DefinedRange } from '../CalendarRanges';
import { useStyles } from '../DatePicker/DatePicker.styles';
import { FormControl } from '../FormControl';
import { Overlay, Placement } from '../Overlay';
import { Popover } from '../Popover';
import { Typography } from '../Typography';

export type DateRangePickerElement = 'div';

export interface DateRangePickerOptions<T extends As = DateRangePickerElement>
  extends Options<T>,
    AriaDateRangePickerProps<DateValue>,
    StyleProps {
  /**
   * The ref of the element to append the overlay to.
   */
  containerRef?: React.RefObject<HTMLElement>;
  /**
   * Helper text to append to the form control input element.
   */
  helperText?: React.ReactNode;
  /**
   * Props passed to the helper text.
   */
  helperTextProps?: React.HTMLAttributes<HTMLElement>;
  /**
   * Label of the input element
   */
  label?: React.ReactNode;
  /**
   * Props passed to the label.
   */
  labelProps?: React.HTMLAttributes<HTMLElement>;
  /**
   * The additional offset applied along the main axis between the element and its
   * anchor element.
   *
   * @default 4
   */
  offset?: number;
  /**
   * The placement of the element with respect to its anchor element.
   *
   * @default 'bottom'
   */
  placement?: Placement;
  /**
   * Temporary text that occupies the text input when it is empty.
   */
  placeholder?: string;
  /**
   * Whether the element should flip its orientation (e.g. top to bottom or left to right) when
   * there is insufficient room for it to render completely.
   *
   * @default true
   */
  shouldFlip?: boolean;
  /**
   * The size of the combobox
   *
   * @default 'medium'
   */
  size?: 'medium' | 'small';
  /**
   * Icon displayed at the start of the text field.
   *
   * @example
   * <Combobox startIcon={<Icon />} />
   */
  startIcon?: React.ReactElement;

  /**
   * Allows to show or hide the calendar of the component
   *
   * @default true
   * @example
   * <DateRangePicker showCalendar={false} />
   */
  showCalendar?: boolean;

  /**
   * Allows to pass or avoid the ranges to the component and shoen them instead of the predefined ones
   *
   * @default false
   * @example
   * <DateRangePicker showRanges={false} />
   */
  showRanges?: boolean;

  /**
   * Brings the list of ranges defined to the component
   */
  ranges?: DefinedRange[];
}

export type DateRangePickerProps<T extends As = DateRangePickerElement> = Props<
  DateRangePickerOptions<T>
>;

export const DateRangePicker = createComponent<DateRangePickerOptions>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
    autoFocus,
    className: classNameProp,
    containerRef: containerRefProp,
    css,
    helperText,
    helperTextProps = {},
    isDisabled,
    isReadOnly,
    isRequired,
    ranges,
    showCalendar = true,
    showRanges = false,
    label,
    labelProps: labelPropsProp = {},
    offset = 4,
    placeholder,
    placement = 'bottom start',
    shouldFlip = true,
    size,
    startIcon,
    validationState,
  } = props;

  const state = useDateRangePickerState(props);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const {
    groupProps,
    labelProps,
    buttonProps: triggerProps,
    dialogProps,
    calendarProps,
    descriptionProps,
    errorMessageProps,
  } = useDateRangePicker(props, state, triggerRef);

  const { overlayProps } = useOverlayPosition({
    isOpen: state.isOpen,
    offset,
    onClose: () => void state.setOpen(false),
    overlayRef: popoverRef,
    placement,
    shouldFlip,
    targetRef: containerRef,
  });

  const isInvalid = validationState === 'invalid';

  const { buttonProps, isPressed } = useButton({ ...triggerProps, isDisabled }, triggerRef);
  const { isFocused, isFocusVisible, focusProps } = useFocusRing({ autoFocus });
  const { hoverProps, isHovered } = useHover({ isDisabled });

  const handleClose = React.useCallback(() => void state.setOpen(false), [state]);

  const { className } = useStyles({
    hasStartIcon: Boolean(startIcon),
    isActive: state.isOpen,
    isDisabled,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    isPlaceholder: !state.value,
    isPressed,
    isReadOnly,
    size,
    css,
  });

  const classes = cx(className, classNameProp, {
    'manifest-datepicker': true,
    'manifest-datepicker--disabled': isDisabled,
    'manifest-datepicker--invalid': isInvalid,
    [`manifest-datepicker--${size}`]: size,
  });

  const getDisplayValue = () => {
    const { start, end } = state.value;

    const [fromDate, toDate] = [start, end].map((date) => {
      if (!date) {
        return undefined;
      }

      return `${new Date(date.year, date.month - 1, date.day).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })}`;
    });

    return fromDate && toDate ? `${fromDate} - ${toDate}` : placeholder;
  };

  return (
    <FormControl
      className={classes}
      helperText={helperText}
      helperTextProps={mergeProps(descriptionProps, errorMessageProps, helperTextProps)}
      isRequired={isRequired}
      label={label}
      labelProps={mergeProps(labelProps, labelPropsProp)}
      validationState={validationState}
    >
      <Comp
        {...groupProps}
        ref={mergeRefs(containerRef, forwardedRef)}
        className="manifest-datepicker__wrapper"
      >
        {startIcon && (
          <span className={cx('manifest-datepicker__icon', 'manifest-datepicker__icon--start')}>
            {startIcon}
          </span>
        )}

        <button
          {...mergeProps(buttonProps, focusProps, hoverProps)}
          ref={triggerRef}
          className="manifest-datepicker__input"
        >
          <Typography variant="subtext">{getDisplayValue()}</Typography>
        </button>

        <span className={cx('manifest-datepicker__icon', 'manifest-datepicker__icon--end')}>
          <CalendarIcon />
        </span>

        <Overlay containerRef={containerRefProp} isOpen={state.isOpen}>
          <Popover
            {...mergeProps(dialogProps, overlayProps)}
            ref={popoverRef}
            className="manifest-datepicker__popover"
            isOpen={state.isOpen}
            onClose={handleClose}
          >
            <CalendarRange
              className="manifest-datepicker__calendar"
              {...calendarProps}
              ranges={ranges}
              showCalendar={showCalendar}
              showRanges={showRanges}
            />
          </Popover>
        </Overlay>
      </Comp>
    </FormControl>
  );
});
