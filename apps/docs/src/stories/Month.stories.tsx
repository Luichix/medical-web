import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Month } from 'ui'
import { MONTH_DATA } from '../assets/data'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Calendar/Month',
  component: Month,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Month>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Month> = (args) => <Month {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  month: MONTH_DATA,
}
