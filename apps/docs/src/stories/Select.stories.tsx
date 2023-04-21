import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Select } from 'ui'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Select>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  desing: 'primary',
  placeholder: 'selection an option',
  options: [
    { value: '1', label: 'basic' },
    { value: '2', label: 'medium' },
  ],
}

export const Secondary = Template.bind({})
Secondary.args = {
  desing: 'secondary',
  placeholder: 'selection an option',
  options: [
    { value: '1', label: 'basic' },
    { value: '2', label: 'medium' },
  ],
}
export const Tertiary = Template.bind({})
Tertiary.args = {
  desing: 'tertiary',
  placeholder: 'selection an option',
  options: [
    { value: '1', label: 'basic' },
    { value: '2', label: 'medium' },
  ],
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
}
