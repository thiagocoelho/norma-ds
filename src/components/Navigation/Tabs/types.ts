import { Ref } from 'react';

import { TabsProps, TabProps, SxProps } from '@mui/material';
import { TabListProps, TabPanelProps, TabContextProps } from '@mui/lab';
import { Theme } from '@emotion/react';

export type RenderProps<E extends HTMLElement = HTMLElement> = { focusRef?: React.MutableRefObject<E | null>; id?: string };

export type TabsBaseProps = Pick<TabsProps, 'sx'> & {
  ref?: Ref<unknown>;
  sx?: SxProps<Theme>;
  value?: any;
  children?: React.ReactNode;
  component?: any;
  onChange?: (event: React.SyntheticEvent, value: any) => void;
}; 

export type TabBaseProps = Pick<TabProps, 'sx'> & {
  sx?: SxProps<Theme>;
  label?: React.ReactNode;
  value?: any;
  children?: null;
}; 

export type TabListBaseProps = Pick<TabListProps, 'sx'> & {
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
}; 

export type TabPanelBaseProps = Pick<TabPanelProps, 'sx'> & {
  index: number;
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
  value?: any;
}; 

export type TabContextBaseProps = Pick<TabContextProps, any> & {
  children?: React.ReactNode;
  value?: any;
}; 

