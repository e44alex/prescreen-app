import type { Meta, StoryObj } from '@storybook/react';

import { QuestionCard } from 'src/components/question-card/QuestionCard.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/QuestionCard',
  component: QuestionCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof QuestionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    question: {
      text: 'Test question', options: [
        {
          text: 'Option 1', isCorrect: true,
        },
        {
          text: 'Option 2', isCorrect: false,
        },
      ],
    },
  },
};
