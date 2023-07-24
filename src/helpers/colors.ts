import { createTheme } from '@mui/material/styles';

export type IconsColors = 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'white' | 'black';
export type BtnColors = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

export const palette = {
  inherit: '#000000', 
  primary: '#FF7F11', 
  secondary: '#43BBF2', 
  error: '#D63643', 
  warning: '#FFC300', 
  info: '#71D5F7', 
  success: '#6BC235', 
  white: '#ffffff', 
  black: '#666666', 
  helper: '#5A2A79', 
  primaryLight: '#FFDB9F',
  primaryMedium: '#FFA84C',
  primaryDark: '#B74608',
  secondaryLight: '#D9FCFE',
  secondaryMedium: '#71D5F7',
  secondaryDark: '#154F8C',
  inheritLight: '#A3A3A3',
  inheritMedium: '#666666',
  inheritDark: '#292929',
  whiteLight: '#F5F5F5',
  whiteMedium: '#E0E0E0',
  whiteDark: '#CCCCCC',
  successLight: '#D9F8B0',
  successMedium: '#B9EC85',
  successDark: '#247010',
  errorLight: '#FABEAF',
  errorMedium: '#F29085',
  errorDark: '#F29085',
  warningLight: '#FFF7CC',
  warningMedium: '#FFE266',
  warningDark: '#936600',
  helperLight: '#F3D7F8',
  helperMedium: '#BF82D6',
  helperDark: '#250D46',
};

export const textColors = {
  inherit: palette.inherit,
  primary: palette.primary,
  secondary: palette.secondary,
  error: palette.error,
  warning: palette.warning,
  info: palette.info,
  success: palette.success,
  white: palette.white,
  black: palette.black,
  helper: palette.helper,
  primaryLight: palette.primaryLight,
  primaryMedium: palette.primaryMedium,
  primaryDark: palette.primaryDark,
  secondaryLight: palette.secondaryLight,
  secondaryMedium: palette.secondaryMedium,
  secondaryDark: palette.secondaryDark,
  inheritLight: palette.inheritLight,
  inheritMedium: palette.inheritMedium,
  inheritDark: palette.inheritDark,
  whiteLight: palette.whiteLight,
  whiteMedium: palette.whiteMedium,
  whiteDark: palette.whiteDark,
  successLight: palette.successLight,
  successMedium: palette.successMedium,
  successDark: palette.successDark,
  errorLight: palette.errorLight,
  errorMedium: palette.errorMedium,
  errorDark: palette.errorDark,
  warningLight: palette.warningLight,
  warningMedium: palette.warningMedium,
  warningDark: palette.warningDark,
  helperLight: palette.helperLight,
  helperMedium: palette.helperMedium,
  helperDark: palette.helperDark,
};

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
  primaryLight: palette.primaryLight,
  primaryMedium: palette.primaryMedium,
  primaryDark: palette.primaryDark,
  secondaryLight: palette.secondaryLight,
  secondaryMedium: palette.secondaryMedium,
  secondaryDark: palette.secondaryDark,
  inheritLight: palette.inheritLight,
  inheritMedium: palette.inheritMedium,
  inheritDark: palette.inheritDark,
  whiteLight: palette.whiteLight,
  whiteMedium: palette.whiteMedium,
  whiteDark: palette.whiteDark,
  successLight: palette.successLight,
  successMedium: palette.successMedium,
  successDark: palette.successDark,
  errorLight: palette.errorLight,
  errorMedium: palette.errorMedium,
  errorDark: palette.errorDark,
  warningLight: palette.warningLight,
  warningMedium: palette.warningMedium,
  warningDark: palette.warningDark,
  helperLight: palette.helperLight,
  helperMedium: palette.helperMedium,
  helperDark: palette.helperDark,
};

export const colors: Record<IconsColors, string> = {
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

const olosPalette = {
  primary: {
    main: palette.primary, 
  },
  secondary: {
    main: palette.secondary,  
  },
  error: {
    main: palette.error, 
  },
  warning: {
    main: palette.warning, 
  },
  info: {
    main: palette.info, 
  },
  success: {
    main: palette.success, 
  },
};

export const theme = createTheme({
  palette: {
    ...olosPalette,
  },
});

export function getIconsColorsArray(): IconsColors[] {
  return Object.keys(colors) as IconsColors[];
}

export const getBtnColorsArray: BtnColors[] = ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'];