import type { Preview } from '@storybook/react-vite'
import { create } from 'storybook/theming/create'

import '../src/index.css'

// Mesmo tema de `.storybook/manager.ts`, aplicado aos blocos de docs
// (tabelas de Args, etc.) — decisão humana 2026-08-14, ver manager.ts.
const docsTheme = create({
  base: 'light',
  brandTitle: 'Kandrive',
  brandImage: '/kandrive-logo.svg',
  fontBase: '"Figtree Variable", "Figtree", sans-serif',
  colorPrimary: '#007e96',
  colorSecondary: '#007e96',
  appBg: '#f7f7f5',
  appContentBg: '#ffffff',
  textColor: '#201f1a',
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    docs: {
      theme: docsTheme,
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;