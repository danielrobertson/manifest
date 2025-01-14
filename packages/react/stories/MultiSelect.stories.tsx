import * as React from 'react';
import type { ComponentStory } from '@storybook/react';
import { Icon, MultiSelect, SelectItem, SelectSection } from '../src';

export default {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  subcomponents: { SelectItem, SelectSection },
};

const Template: ComponentStory<typeof MultiSelect> = (args) => <MultiSelect {...args} />;

export const Default = Template.bind({});

Default.decorators = [
  () => (
    <MultiSelect placeholder="Select time...">
      <SelectItem key="late">Running Late</SelectItem>
      <SelectItem key="early">Running Early</SelectItem>
      <SelectItem key="estimated">Estimated Time</SelectItem>
      <SelectItem key="planned">Planned Time</SelectItem>
      <SelectItem key="actual">Actual Time</SelectItem>
    </MultiSelect>
  ),
];

export const StartIcon = Template.bind({});

StartIcon.decorators = [
  () => (
    <MultiSelect startIcon={<Icon icon="search" />}>
      <SelectItem key="Aardvark">Aardvark</SelectItem>
      <SelectItem key="Kangaroo">Kangaroo</SelectItem>
      <SelectItem key="Snake">Snake</SelectItem>
    </MultiSelect>
  ),
];

export const Label = Template.bind({});

Label.decorators = [
  () => (
    <MultiSelect label="Animal">
      <SelectItem key="Aardvark">Aardvark</SelectItem>
      <SelectItem key="Kangaroo">Kangaroo</SelectItem>
      <SelectItem key="Snake">Snake</SelectItem>
    </MultiSelect>
  ),
];

export const HelperText = Template.bind({});

HelperText.decorators = [
  () => (
    <MultiSelect helperText="Please select an animal">
      <SelectItem key="Aardvark">Aardvark</SelectItem>
      <SelectItem key="Kangaroo">Kangaroo</SelectItem>
      <SelectItem key="Snake">Snake</SelectItem>
    </MultiSelect>
  ),
];

export const Invalid = Template.bind({});

Invalid.decorators = [
  () => (
    <MultiSelect helperText="Error text" validationState="invalid">
      <SelectItem key="Aardvark">Aardvark</SelectItem>
      <SelectItem key="Kangaroo">Kangaroo</SelectItem>
      <SelectItem key="Snake">Snake</SelectItem>
    </MultiSelect>
  ),
];

export const Controlled = Template.bind({});

Controlled.decorators = [
  () => {
    const [selected, setSelected] = React.useState(new Set(['Kangaroo']));

    const handleSelectionChange = React.useCallback((keys: Set<React.Key> | 'all') => {
      setSelected(keys as Set<string>);
    }, []);

    return (
      <MultiSelect selectedKeys={selected} onSelectionChange={handleSelectionChange}>
        <SelectItem key="Aardvark">Aardvark</SelectItem>
        <SelectItem key="Kangaroo">Kangaroo</SelectItem>
        <SelectItem key="Snake">Snake</SelectItem>
      </MultiSelect>
    );
  },
];
