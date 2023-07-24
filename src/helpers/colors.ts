

export type IconsColors = 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'white' | 'black';
export type BtnColors = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

// Definindo a paleta de cores principal
export const palette = {
  inherit: '#000000', // Preto
  primary: '#FF7F11', // Azul
  secondary: '#43BBF2', // Rosa
  error: '#D63643', // Vermelho
  warning: '#FFC300', // Laranja
  info: '#71D5F7', // Azul claro
  success: '#6BC235', // Verde
  white: '#ffffff', // Branco
  black: '#666666', // Cinza
};

// Definindo cores de texto com base na paleta de cores
export const textColors = {
  inherit: palette.inherit,
  primary: palette.black,
  secondary: palette.black,
  error: palette.white,
  warning: palette.black,
  info: palette.white,
  success: palette.white,
  white: palette.black,
  black: palette.white,
};

// Definindo cores de fundo com base na paleta de cores
export const backgroundColors = {
  inherit: palette.inherit,
  primary: palette.primary,
  secondary: palette.secondary,
  error: palette.error,
  warning: palette.warning,
  info: palette.info,
  success: palette.success,
  white: palette.white,
  black: palette.black,
};


export const colors: Record<IconsColors, string> = {
  inherit: palette.inherit,
  primary: palette.primary,
  secondary: palette.secondary,
  error: palette.error,
  info: palette.info,
  success: palette.success,
  warning: palette.warning,
  white: palette.white,
  black: palette.black,
};

export function getIconsColorsArray(): IconsColors[] {
  return Object.keys(colors) as IconsColors[];
}


export const getBtnColorsArray: BtnColors[] = ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'];