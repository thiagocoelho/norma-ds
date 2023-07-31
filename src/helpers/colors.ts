import { createTheme } from '@mui/material/styles';
export type IconsColors = 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'white' | 'black';
export type BtnColors = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

export const getPalette = () => {
  const storedColor = localStorage.getItem('primaryColor');
  const primaryColors = storedColor ? JSON.parse(storedColor) : false;

  return {
    primary: primaryColors ? primaryColors.primary : '#FF7F11',
    primaryLight: primaryColors ? primaryColors.primaryLight : '#FFDB9F',
    primaryMedium: primaryColors ? primaryColors.primaryMedium : '#FFA84C',
    primaryDark: primaryColors ? primaryColors.primaryDark : '#B74608',
    
    inherit: '#000000', 
    secondary: '#43BBF2', 
    error: '#D63643', 
    warning: '#FFC300', 
    info: '#71D5F7', 
    success: '#6BC235', 
    white: '#ffffff', 
    black: '#666666', 
    helper: '#5A2A79', 
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
};

export const palette = getPalette();

// console.log("COLOR PRIMARY ==> ", palette.primary);


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

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    ...olosPalette,
  }
});

export const darkTheme = createTheme({
   palette: {
    mode: 'dark',
    ...olosPalette,
     background: {
        default: palette.inheritLight,
        paper: palette.inheritDark,
      }
  }
});

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};


export function getIconsColorsArray(): IconsColors[] {
  return Object.keys(colors) as IconsColors[];
}

export const getBtnColorsArray: BtnColors[] = ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'];