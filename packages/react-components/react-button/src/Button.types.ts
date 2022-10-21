import { CSS } from '@project44-manifest/react-styles';
import { PressEvent } from '@project44-manifest/react-types';

export type ButtonSize = 'medium' | 'small';

export type ButtonVariant = 'brand' | 'danger' | 'primary' | 'secondary' | 'tertiary';

export interface ButtonSizeClasses {
	medium: string;
	large: string;
}

export interface ButtonVariantClasses {
	brand: string;
	danger: string;
	primary: string;
	secondary: string;
	tertiary: string;
}

export interface ButtonClasses extends ButtonSizeClasses, ButtonVariantClasses {
	disabled: string;
	endIcon: string;
	startIcon: string;
}

export type ButtonElement = 'button';

export interface ButtonProps {
	/** Whether the element should receive focus on render. */
	autoFocus?: boolean;
	/** Override classes for the component */
	classes?: Partial<ButtonClasses>;
	/** Theme aware style object */
	css?: CSS;
	/** Icon added after the button text. */
	endIcon?: React.ReactElement;
	/** A URL to link to if as="a". */
	href?: string;
	/** Whether the button is disabled. */
	isDisabled?: boolean;
	/** Handler that is called when the press is released over the target. */
	onPress?: (e: PressEvent) => void;
	/** Handler that is called when a press interaction starts. */
	onPressStart?: (e: PressEvent) => void;
	/**
	 * Handler that is called when a press interaction ends, either
	 * over the target or when the pointer leaves the target.
	 */
	onPressEnd?: (e: PressEvent) => void;
	/** Handler that is called when the press state changes. */
	onPressChange?: (isPressed: boolean) => void;
	/**
	 * Handler that is called when a press is released over the target, regardless of
	 * whether it started on the target or not.
	 */
	onPressUp?: (e: PressEvent) => void;
	/** The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel). */
	rel?: string;
	/**
	 * The size of the button.
	 *
	 * @default 'medium'
	 */
	size?: ButtonSize;
	/** Icon added before the button text. */
	startIcon?: React.ReactElement;
	/** The target window for the link. */
	target?: string;
	/**
	 * The display variant of the button.
	 *
	 * @default 'primary'
	 */
	variant?: ButtonVariant;
}