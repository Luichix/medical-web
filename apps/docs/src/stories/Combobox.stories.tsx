import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Combobox } from 'ui'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Combobox',
  component: Combobox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Combobox>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Combobox> = (args) => (
  <Combobox {...args} />
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  options: [
    { id: '1', name: 'Larry Alexander' },
    { id: '2', name: 'Leo Astel' },
    { id: '3', name: 'Jose Zuniga' },
    { id: '4', name: 'Mate Morales' },
    { id: '5', name: 'Juan Lopez' },
    { id: '6', name: 'Malenia Stella' },
  ],
}

export const Secondary = Template.bind({})
Secondary.args = {
  options: [
    { id: '1', name: 'basic' },
    { id: '2', name: 'medium' },
  ],
}
export const Tertiary = Template.bind({})
Tertiary.args = {
  options: [
    { id: '1', name: 'basic' },
    { id: '2', name: 'medium' },
  ],
}
