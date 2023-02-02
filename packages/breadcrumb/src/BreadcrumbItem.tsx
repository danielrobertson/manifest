import * as React from 'react';
import { ChevronRight } from '@project44-manifest/react-icons';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledBreadcrumbItem } from './BreadcrumbItem.styles';
import type { BreadcrumbItemElement, BreadcrumbItemProps } from './BreadcrumbItem.types';

export const BreadcrumbItem = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-breadcrumb-item', classNameProp);

  return (
    <StyledBreadcrumbItem {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
      <ChevronRight size="small" />
    </StyledBreadcrumbItem>
  );
}) as ForwardRefComponent<BreadcrumbItemElement, BreadcrumbItemProps>;
