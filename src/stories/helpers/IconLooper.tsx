import React from 'react';
import { Icon } from '../../types';

export function isKeyof<T extends object>(obj: T, possibleKey: keyof any): possibleKey is keyof T {
  return possibleKey in obj;
}

export type IconLooperProps = {
  children: (name: string, icon: Icon) => React.ReactElement;
  icons: Record<string, Icon>;
};

export function IconLooper({ children, icons }: IconLooperProps) {
  const items = Object.keys(icons).map(icon => {
    if (isKeyof<typeof icons>(icons, icon)) {
      // eslint-disable-next-line import/namespace
      return children(icon, icons[icon]);
    }
    return null;
  });
  return <React.Fragment>{items}</React.Fragment>;
}

IconLooper.displayName = 'IconLooper';
