import { styled } from '@project44-manifest/react-styles';

export const StyledBreadcrumbItem = styled('li', {
  d: 'flex',
  alignItems: 'center',
  color: '$text-secondary',

  '& a': {
    typography: '$subtext',
    color: 'inherit',
    textDecoration: 'none',
  },

  '&:last-child svg': {
    display: 'none',
  },
});
