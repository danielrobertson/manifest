import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { useMergedRef } from '@project44-manifest/use-merged-ref';
import { StyledBreadcrumb } from './Breadcrumb.styles';
import type { BreadcrumbElement, BreadcrumbProps } from './Breadcrumb.types';

export const Breadcrumb = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const nodeRef = React.useRef<HTMLOListElement>(null);
  const mergedRef = useMergedRef(nodeRef, forwardedRef);

  // need the following, but mergedRef is a fn, doesn't appear to have current
  const hasOverflow = mergedRef.current?.offsetWidth < mergedRef.current?.scrollWidth;

  const className = cx('manifest-breadcrumb', classNameProp);

  return (
    <StyledBreadcrumb {...other} ref={mergedRef} as={as} className={className} css={css}>
      {children}
    </StyledBreadcrumb>
  );
}) as ForwardRefComponent<BreadcrumbElement, BreadcrumbProps>;
