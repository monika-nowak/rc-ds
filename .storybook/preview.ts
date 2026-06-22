import type { Preview } from '@storybook/react-vite';
import '../src/styles/tokens.css';
import '../src/styles/typography.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Foundations',
          ['Colors', 'Templates', 'Typography', 'Spacing', 'Radius', 'Elevation'],
          'Components',
          '*',
        ],
      },
    },
  },
};

export default preview;
