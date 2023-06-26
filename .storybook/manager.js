import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import { create } from '@storybook/theming/create';
import logo from '../public/images/olos-norma-ds-dark.svg';

const defaultTheme = create({
   brandImage: logo,
    brandTitle: 'Norma/DS',
    brandUrl: process.env.STORYBOOK_URL || 'https://www.olos.com.br/',
    fontBase: 'Roboto, "Open Sans", sans-serif',
});

addons.setConfig({
  theme: { ...themes['light'], ...defaultTheme },
});
