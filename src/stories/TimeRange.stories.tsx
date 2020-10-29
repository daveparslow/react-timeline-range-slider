import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { TimeRange, TimeRangeProps } from '../TimeRange';

export default {
  title: 'TimeRange',
  component: TimeRange,
  argTypes: {
    timelineInterval: {
      control: {
        type: 'array'
      }
    }
  }
} as Meta;

const Template: Story<TimeRangeProps> = args => <TimeRange {...args} />;

export const Example = Template.bind({});
Example.args = {};
