import React, { FunctionComponent, forwardRef } from 'react';
import { styled } from '@storybook/theming';
import { defaultIcons } from './default';
import { IconsProps, sizes, colors } from './types';


const IconsBase: FunctionComponent<IconsProps & { ref: React.Ref<HTMLDivElement> }> = forwardRef(
  ({ icon, scale, color = 'default', width = 0, height = 0, fill, ...props }: IconsProps, ref) => {
    let newWidth = 24;
    let newheight = 24;

    if (scale) {
      newWidth = sizes[scale];
      newheight = sizes[scale];
    } 

    if (width && width > 0 && height && height > 0) {
      newWidth = width;
      newheight = height;
    }

    let newFill = colors[color];

    if(fill){
      newFill = fill
    }

    const Svg = styled.svg`
      display: inline-block;
      shape-rendering: inherit;
      vertical-align: middle;
      fill: ${newFill};
      path {
        fill: ${newFill};
      };
    `;

    const iconElement = defaultIcons[icon];

    return (
      <Svg viewBox="0 0 20 20" width={`${newWidth}px`} height={`${newheight}px`} {...props}>
        {(
          iconElement && React.cloneElement(iconElement, { newFill })
        )}
      </Svg>
    );
  }
);

export const Icons = forwardRef<HTMLDivElement, IconsProps>((props, ref) => <IconsBase {...props} ref={ref} />);


