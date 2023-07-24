import React, { FunctionComponent, ComponentProps, memo } from 'react';
import { styled } from '@storybook/theming';
import { normaIcons, IconKey } from './norma';
import { palette } from '../../../helpers/colors';

export type IconScale = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | '2xlarge' | '3xlarge';
export type Colors = 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'white' | 'black';

const scaleSize: Record<IconScale, number> = {
  xsmall: 14,
  small: 20,
  medium: 24,
  large: 28,
  xlarge: 32,
  '2xlarge': 36,
  '3xlarge': 40,
};

// Definindo um objeto com as cores de preenchimento e traço com base no MUI
const colors: Record<Colors, string> = {
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

export interface IconsProps extends ComponentProps<typeof Svg> {
  icon: IconType;
  useSymbol?: boolean;
  scale?: IconScale;
  color?: Colors;
}

export const Icons: FunctionComponent<IconsProps> = ({
  icon,
  scale,
  useSymbol,
  color = 'default', // Define 'default' como valor padrão se a prop não for fornecida
  ...props
}: IconsProps) => {
  let width = 24;
  let height = 24;
  if (scale) {
    width = scaleSize[scale];
    height = scaleSize[scale];
  }
  
  // Obtém a cor de preenchimento e traço com base no valor da prop 'color'
  const fill = colors[color];
  const stroke = colors[color];

  const Svg = styled.svg`
    display: inline-block;
    shape-rendering: inherit;
    vertical-align: middle;
    fill: ${fill}; 
    path {
      stroke: ${stroke};
    };
    circle{
      stroke: ${stroke};
    };
    rect{
      stroke: ${stroke};
    }
  `;
  
  return (
    <Svg viewBox="0 0 64 64" width={`${width}px`} height={`${height}px`} {...props}>
      {useSymbol ? (
        <use xlinkHref={`#icon--${icon}`} fill={fill} stroke={stroke} />
      ) : (
        React.cloneElement(normaIcons[icon], { fill, stroke })
      )}
    </Svg>
  );
};


export type IconType = keyof typeof normaIcons;

export interface SymbolsProps extends ComponentProps<typeof Svg> {
  icons?: IconKey[];
}

export const Symbols = memo<SymbolsProps>(function Symbols({ icons: keys = Object.keys(normaIcons) }) {
  return (
    <Svg
      viewBox="0 0 64 64"
      style={{ position: 'absolute', width: 0, height: 0 }}
      data-chromatic="ignore"
    >
      {keys.map((key: IconKey) => (
        <symbol id={`icon--${key}`} key={key}>
          {icons[key]}
        </symbol>
      ))}
    </Svg>
  );
});
