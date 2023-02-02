import { render, screen } from '@testing-library/react';
import { Breadcrumb, BreadcrumbItem } from '../src';

describe('breadcrumb', () => {
  it('should render crumb links', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#home">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#catalog">Catalog</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#products">Products</a>
        </BreadcrumbItem>
      </Breadcrumb>,
    );

    expect(screen.getByText('Home')).toBeDefined();
    expect(screen.getByText('Catalog')).toBeDefined();
    expect(screen.getByText('Products')).toBeDefined();

    const anchors = screen.getAllByRole('link');
    expect(anchors).toHaveLength(3);
  });
});
