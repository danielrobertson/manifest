import type * as CSSType from 'csstype';
import { CSS } from '@project44-manifest/react-styles';

export interface GridClasses {
	root: string;
	columnGapLarge: string;
	columnGapMedium: string;
	columnGapSmall: string;
	columnGapXLarge: string;
	columnGapXSmall: string;
	gapLarge: string;
	gapMedium: string;
	gapSmall: string;
	gapXLarge: string;
	gapXSmall: string;
	rowGapLarge: string;
	rowGapMedium: string;
	rowGapSmall: string;
	rowGapXLarge: string;
	rowGapXSmall: string;
}

export type GridElement = 'div';

export interface GridProps {
	/** Override classes for the component */
	classes?: Partial<GridClasses>;
	/**
	 * The gap between columns
	 */
	columnGap?: 'large' | 'medium' | 'small' | 'x-large' | 'x-small';
	/**
	 * Shorthand for the gridTemplateColumns css property.
	 *
	 * @default 'auto'
	 */
	columns?: CSSType.Property.GridTemplateColumns;
	/** Theme aware style object */
	css?: CSS;
	/**
	 * Shorthand for the gridAutoFlow css property.
	 */
	flow?: CSSType.Property.GridAutoFlow;
	/**
	 * The gap between rows and columns.
	 */
	gap?: 'large' | 'medium' | 'small' | 'x-large' | 'x-small';
	/**
	 * The gap between rows
	 */
	rowGap?: 'large' | 'medium' | 'small' | 'x-large' | 'x-small';
	/**
	 * Shorthand for the gridTemplateRows css property.
	 *
	 * @default 'auto'
	 */
	rows?: CSSType.Property.GridTemplateRows;
}