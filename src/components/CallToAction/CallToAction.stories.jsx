import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import CallToAction from './'

storiesOf('CallToAction', module).add('with text', () => (
  <CallToAction>{text('Text', 'Sample text')}</CallToAction>
))
