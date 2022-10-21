import * as React from 'react';
import { AriaButtonProps, useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { ForwardRefComponent, PressEvent } from '@project44-manifest/react-types';
import { mergeProps, mergeRefs } from '@project44-manifest/react-utils';
import { ButtonIcon } from './Button.icon';
import { useStyles } from './Button.styles';
import { ButtonElement, ButtonProps } from './Button.types';
import { useButtonGroup } from './ButtonGroup.context';

export const Button = React.forwardRef((props, forwardedRef) => {
	const group = useButtonGroup();

	const {
		as: Comp = 'button',
		autoFocus,
		children,
		className: classNameProp,
		classes: classesProp,
		css,
		isDisabled = group?.isDisabled,
		endIcon,
		onClick,
		onPress,
		size = group?.size ?? 'medium',
		startIcon,
		variant = group?.variant ?? 'primary',
		...other
	} = props;

	const buttonRef = React.useRef<HTMLButtonElement>(null);

	const handlePress = React.useCallback(
		(event: PressEvent) => {
			onClick?.(event as unknown as React.MouseEvent<HTMLButtonElement>);
			onPress?.(event);
		},
		[onClick, onPress],
	);

	const { buttonProps, isPressed } = useButton(
		{
			...(other as AriaButtonProps),
			elementType: Comp,
			isDisabled,
			onPress: handlePress,
		},
		buttonRef,
	);
	const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });
	const { hoverProps } = useHover({ isDisabled });

	const { classes, cx } = useStyles(
		{ isDisabled, size, variant },
		{
			name: 'button',
			classes: classesProp,
			slots: {
				root: [
					size,
					variant,
					isDisabled && 'disabled',
					endIcon && 'endIcon',
					startIcon && 'startIcon',
				],
			},
		},
	);

	return (
		<Comp
			{...mergeProps(buttonProps, focusProps, hoverProps)}
			ref={mergeRefs(buttonRef, forwardedRef)}
			className={cx(classes.root, classNameProp)}
			data-focus-visible={isFocusVisible ? '' : undefined}
			data-pressed={isPressed ? '' : null}
		>
			{startIcon && (
				<ButtonIcon className={classes.startIcon} placement="start" size={size}>
					{startIcon}
				</ButtonIcon>
			)}
			{children}
			{endIcon && (
				<ButtonIcon className={classes.endIcon} placement="end" size={size}>
					{endIcon}
				</ButtonIcon>
			)}
		</Comp>
	);
}) as ForwardRefComponent<ButtonElement, ButtonProps>;