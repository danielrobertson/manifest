import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Grid, GridItem } from '../src';

export default {
	title: 'Components/Grid',
	component: Grid,
	subcomponents: { GridItem },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
	<Grid {...args}>
		<GridItem css={{ backgroundColor: '$background-secondary' }} />
		<GridItem css={{ backgroundColor: '$background-secondary' }} />
		<GridItem css={{ backgroundColor: '$background-secondary' }} />
		<GridItem css={{ backgroundColor: '$background-secondary' }} />
		<GridItem css={{ backgroundColor: '$background-secondary' }} />
	</Grid>
);

export const Default = Template.bind({});

Default.decorators = [
	() => (
		<Grid columns="repeat(5, 1fr)" gap="small">
			<GridItem css={{ backgroundColor: '$background-secondary' }} />
			<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
			<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
			<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
			<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
		</Grid>
	),
];

export const Rows = Template.bind({});

Rows.decorators = [
	() => (
		<Grid gap="small" rows="repeat(5, 1fr)">
			<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
			<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
			<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
			<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
			<GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
		</Grid>
	),
];

export const Span = Template.bind({});

Span.decorators = [
	() => (
		<Grid columns="repeat(5, 1fr)" css={{ height: '200px' }} gap="small" rows="repeat(2, 1fr)">
			<GridItem column={1} css={{ backgroundColor: '$background-secondary' }} row={2} />
			<GridItem column={2} css={{ backgroundColor: '$background-secondary' }} />
			<GridItem column={2} css={{ backgroundColor: '$background-secondary' }} />
			<GridItem column={4} css={{ backgroundColor: '$background-secondary' }} />
		</Grid>
	),
];

export const Alignment = Template.bind({});

Alignment.decorators = [
	() => (
		<Grid columns="repeat(5, 1fr)" gap="small">
			<GridItem
				column={2}
				css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }}
			/>
			<GridItem
				columnEnd={6}
				columnStart={4}
				css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }}
			/>
		</Grid>
	),
];