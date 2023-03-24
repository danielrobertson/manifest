import { styled } from '@project44-manifest/react-styles';
import { Link } from '../Link';

export const StyledBreadcrumbItem = styled('li', {
  d: 'flex',
  alignItems: 'center',
  color: '$text-secondary',

  [`& ${Link}`]: {
    typography: '$subtext',
    color: 'inherit',
    textDecoration: 'none',
  },

  '&:last-child .manifest-icon': {
    display: 'none',
  },
});