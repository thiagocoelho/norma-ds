import { withMuiTheme } from './with-mui-theme.decorator';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18next';
import React, { Suspense, useEffect } from 'react';

import { ClientColorsProvider } from '../src/context/ClientColorsContext';
import { BriefcaseIcon } from 'heroicons-react';

// Load Roboto fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

const i18nextStoryDecorator = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
          <Story />
      </I18nextProvider>
    </Suspense>
  );
};

i18n.on('languageChanged', (locale) => {
  const direction = i18n.dir(locale);
  document.dir = direction;
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
   locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
        items: [
          { value: 'en', right: '🇺🇸', title: 'English' },
          { value: 'ptBR', right: 'pt-br', title: 'Português' },
      ],
      showName: true,
    },
  },
  client: {
    name: 'Client',
    description: 'The selected client',
    defaultValue: 'default', 
    toolbar: {
      icon: 'users', 
      items: [
        { value: 'default', title: 'Default' }, 
        { value: 'olos', title: 'Olos' },
        { value: 'bradesco', title: 'Bradesco' },
      ],
    },
  },
  theme: {
    name: 'Theme',
    title: 'Theme',
    description: 'Theme for your components',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      items: [
        { value: 'light', left: '☀️', title: 'Light mode' },
        { value: 'dark', left: '🌙', title: 'Dark mode' },
      ],
    },
  },
};


export const decorators = [
  i18nextStoryDecorator,
   (Story, { globals }) => {
    const client = globals.client; 
    return (
      <ClientColorsProvider client={client}>
        <Story />
      </ClientColorsProvider>
    );
  },
  withMuiTheme
];