import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { Icon } from '../Icon';
import { useStyles } from './TableColumn.styles';

type Align = 'center' | 'justify' | 'left' | 'right';
type TableColumnElement = 'th';

export interface TableColumnOptions<T extends As = TableColumnElement>
  extends Options<T>,
    StyleProps {
  /**
   * Text alignment of the table column.
   *
   * @default 'left'
   */
  align?: Align;
  /**
   * The content of the column.
   */
  children?: React.ReactNode;
  /**
   * Whether the current column is actively sorted.
   */
  isActive?: boolean;
  /**
   * Whether the column supports sorting.
   */
  isSortable?: boolean;
  /**
   * The sort direction of the column.
   *
   * @default 'asc'
   */
  sortDirection?: 'asc' | 'desc';
  /**
   * Callback executed on column click, used for column sort only.
   */
  onClick?: (event: React.MouseEvent<HTMLTableCellElement>) => void;
}

export type TableColumnProps<T extends As = TableColumnElement> = Props<TableColumnOptions<T>>;

export const TableColumn = createComponent<TableColumnOptions>((props, forwardedRef) => {
  const {
    as: Comp = 'th',
    align,
    children,
    className: classNameProp,
    css,
    isActive,
    isSortable,
    sortDirection = 'asc',
    ...other
  } = props;

  const [isHovered, setIsHovered] = React.useState(false);

  const { className } = useStyles({ align, css, isActive, isHovered, isSortable });

  const classes = cx(className, classNameProp, {
    'manifest-table-column': true,
    [`manifest-table-column--${align}`]: align,
  });

  let ariaSort = null;

  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  const handleMouseEnter = React.useCallback(() => {
    if (!isSortable) return;

    setIsHovered(true);
  }, [isSortable]);

  const handleMouseLeave = React.useCallback(() => {
    if (!isSortable) return;

    setIsHovered(false);
  }, [isSortable]);

  return (
    <Comp
      {...other}
      ref={forwardedRef}
      aria-sort={isSortable ? (ariaSort as React.AriaAttributes['aria-sort']) : undefined}
      className={classes}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isSortable && isActive && (
        <Icon
          className={cx('manifest-table-column--icon', {
            'manifest-table-column--icon__ascending': sortDirection === 'asc',
          })}
          icon="expand_more"
        />
      )}
    </Comp>
  );
});