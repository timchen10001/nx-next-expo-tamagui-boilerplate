import type { Meta, StoryObj } from '@storybook/react'
import { SimpleCard } from './SimpleCard'

const meta: Meta<typeof SimpleCard> = {
	title: 'ui/SimpleCard',
	parameters: { layout: 'centered' },
	component: SimpleCard,
}

type Story = StoryObj<typeof SimpleCard>

export const Basic: Story = {
	args: {
		withImages: true,
		title: 'Why you should use Tamagui',
		$gtMd: { width: 340 },
		description:
			'Tamagui is the best way to develop performant cross-platform apps with one codebase...',
		tag: 'React'
	},
}

export default meta
