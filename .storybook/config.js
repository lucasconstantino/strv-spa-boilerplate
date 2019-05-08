import 'babel-polyfill'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withKnobs)

// load stories.
const req = require.context('../src', true, /\.stories\.(js|jsx|ts|tsx)$/)

configure(() => req.keys().forEach(filename => req(filename)), module)
