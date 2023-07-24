import { palette } from '../../../helpers/colors';
import { defaultIcons } from './default';

export type Sizes = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | '2xlarge' | '3xlarge';
export type Colors = 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'white' | 'black';

export const sizes: Record<Sizes, number> = {
  xsmall: 14,
  small: 20,
  medium: 24,
  large: 28,
  xlarge: 32,
  '2xlarge': 36,
  '3xlarge': 40,
};

export const colors: Record<Colors, string> = {
  default: palette.default,
  primary: palette.primary,
  secondary: palette.secondary,
  error: palette.error,
  info: palette.info,
  success: palette.success,
  warning: palette.warning,
  white: palette.white,
  black: palette.black,
};

export interface IconsProps {
  icon: IconType;
  scale?: Sizes;
  color?: Colors;
  width?: number;
  height?: number;
  fill?: string;
}

export type IconType = keyof typeof defaultIcons;

export function getColorsArray(): Colors[] {
  return Object.keys(colors) as Colors[];
}

export function getSizesArray(): Sizes[] {
  return Object.keys(sizes) as Sizes[];
}


