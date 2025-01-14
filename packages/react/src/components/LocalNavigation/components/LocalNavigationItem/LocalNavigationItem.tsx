import * as React from 'react';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import type { AriaButtonProps } from '@react-types/button';
import { CSS, cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledItem } from './LocalNavigationItem.styles';

export interface LocalNavigationItemProps extends AriaButtonProps {
  /** Theme aware style object */
  css?: CSS;
  /** Whether the navigation item is currently selected */
  isSelected?: boolean;
}

export const LocalNavigationItem = React.forwardRef((props, forwardedRef) => {
  const { as, autoFocus, className: classNameProp, css, isSelected, ...other } = props;

  const itemRef = React.useRef<HTMLButtonElement>(null);

  const { buttonProps, isPressed } = useButton(
    {
      ...props,
      elementType: typeof as === 'string' ? as : 'button',
    },
    itemRef,
  );
  const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });
  const { isHovered, hoverProps } = useHover({});

  const className = cx(
    'manifest-local-navigation-item',
    {
      'manifest-local-navigation-item--active': isPressed,
      'manifest-local-navigation-item--hover': isHovered,
      'manifest-local-navigation-item--focus-visible': isFocusVisible,
      'manifest-local-navigation-item--selected': isSelected,
    },
    classNameProp,
  );

  return (
    <StyledItem
      {...mergeProps(buttonProps, focusProps, hoverProps, other)}
      ref={mergeRefs(itemRef, forwardedRef)}
      as={as}
      className={className}
      css={css}
    />
  );
}) as ForwardRefComponent<'button', LocalNavigationItemProps>;
