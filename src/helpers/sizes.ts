export type IconsSizes = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | '2xlarge' | '3xlarge';
export type BtnSizes = 'small' | 'medium' | 'large';

export const iconsSizes: Record<IconsSizes, number> = {
  xsmall: 14,
  small: 20,
  medium: 24,
  large: 28,
  xlarge: 32,
  '2xlarge': 36,
  '3xlarge': 40,
};

export const btnSizes: Record<BtnSizes, string> = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

export function getIconsSizesArray(): IconsSizes[] {
  return Object.keys(iconsSizes) as IconsSizes[];
}

export function getBtnSizesArray(): BtnSizes[] {
  return Object.keys(btnSizes) as BtnSizes[];
}

