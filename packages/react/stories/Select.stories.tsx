import * as React from 'react';
import type { ComponentStory } from '@storybook/react';
import { Flex, Icon, Select, SelectItem, SelectSection } from '../src';

export default {
  title: 'Components/Select',
  component: Select,
  subcomponents: { SelectItem, SelectSection },
};

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.decorators = [
  () => (
    <Select placeholder="Select time...">
      <SelectItem key="late">Running Late</SelectItem>
      <SelectItem key="early">Running Early</SelectItem>
      <SelectItem key="estimated">Estimated Time</SelectItem>
      <SelectItem key="planned">Planned Time</SelectItem>
      <SelectItem key="actual">Actual Time</SelectItem>
    </Select>
  ),
];

export const Sizes = Template.bind({});

Sizes.decorators = [
  () => (
    <Flex css={{ gap: '$small' }} orientation="vertical">
      <Select size="medium">
        <SelectItem key="Aardvark">Aardvark</SelectItem>
        <SelectItem key="Kangaroo">Kangaroo</SelectItem>
        <SelectItem key="Snake">Snake</SelectItem>
      </Select>
      <Select size="small">
        <SelectItem key="Aardvark">Aardvark</SelectItem>
        <SelectItem key="Kangaroo">Kangaroo</SelectItem>
        <SelectItem key="Snake">Snake</SelectItem>
      </Select>
    </Flex>
  ),
];

export const StartIcon = Template.bind({});

StartIcon.decorators = [
  () => (
    <Select startIcon={<Icon icon="search" />}>
      <SelectItem key="Aardvark">Aardvark</SelectItem>
      <SelectItem key="Kangaroo">Kangaroo</SelectItem>
      <SelectItem key="Snake">Snake</SelectItem>
    </Select>
  ),
];

export const Label = Template.bind({});

Label.decorators = [
  () => (
    <Select label="Animal">
      <SelectItem key="Aardvark">Aardvark</SelectItem>
      <SelectItem key="Kangaroo">Kangaroo</SelectItem>
      <SelectItem key="Snake">Snake</SelectItem>
    </Select>
  ),
];

export const HelperText = Template.bind({});

HelperText.decorators = [
  () => (
    <Select helperText="Please select an animal">
      <SelectItem key="Aardvark">Aardvark</SelectItem>
      <SelectItem key="Kangaroo">Kangaroo</SelectItem>
      <SelectItem key="Snake">Snake</SelectItem>
    </Select>
  ),
];

export const Invalid = Template.bind({});

Invalid.decorators = [
  () => (
    <Select helperText="Error text" validationState="invalid">
      <SelectItem key="Aardvark">Aardvark</SelectItem>
      <SelectItem key="Kangaroo">Kangaroo</SelectItem>
      <SelectItem key="Snake">Snake</SelectItem>
    </Select>
  ),
];

export const Controlled = Template.bind({});

Controlled.decorators = [
  () => {
    const [selected, setSelected] = React.useState<React.Key>('Kangaroo');

    return (
      <Select selectedKey={selected} onSelectionChange={setSelected}>
        <SelectItem key="Aardvark">Aardvark</SelectItem>
        <SelectItem key="Kangaroo">Kangaroo</SelectItem>
        <SelectItem key="Snake">Snake</SelectItem>
      </Select>
    );
  },
];
