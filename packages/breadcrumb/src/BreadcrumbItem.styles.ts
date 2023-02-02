import { styled } from '@project44-manifest/react-styles';

export const StyledBreadcrumbItem = styled('li', {
  d: 'flex',
  alignItems: 'center',
  typography: '$subtext',
  color: '$text-secondary',

  '& a': {
    color: 'inherit',
    textDecoration: 'none',
  },

  '&:last-child svg': {
    display: 'none',
  },
});
