import { Breadcrumb, BreadcrumbItem } from '../src';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};

export const Default = () => (
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
  </Breadcrumb>
);

export const Collapsed = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="#home">Home</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="#catalog">Catalog</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="#product">Product</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="#variants">Variants</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="#variant">Variant</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="#customizations">Customizations</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="#sizes">Sizes</a>
    </BreadcrumbItem>
  </Breadcrumb>
);
