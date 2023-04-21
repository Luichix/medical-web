import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Sidenav } from 'ui'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Sidenav',
  component: Sidenav,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Sidenav>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Sidenav> = (args) => (
  <Sidenav {...args}>Hello</Sidenav>
)

export const Light = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {
  theme: 'dark',
}
