import React, { useState } from 'react';
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

const Template: Story<TimeRangeProps> = args => {
  const [selectedInterval, setSelectedInterval] = useState(args.selectedInterval);

  return (
    <div>
      <TimeRange {...args} onChangeCallback={setSelectedInterval} />
      <div>
        {JSON.stringify(selectedInterval?.map(t => t.toLocaleTimeString(undefined, { hour12: false })))}
      </div>
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {};
