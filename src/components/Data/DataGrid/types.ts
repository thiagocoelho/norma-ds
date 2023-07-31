import { SxProps, Theme } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';

export interface DataGridPropsVariantOverrides {}

export interface SortingProps {
  sort?: string;
  active?: boolean;
}

export interface DataTableProps {
  data: { dataSource: any; columns: any }[];
  sx?: SxProps<Theme>;
  variant?: OverridableStringUnion<
    'standard' | 'standard-divider' | 'standard-selectable' | 'quiet' | 'quiet-divider' | 'quiet-selectable',
    DataGridPropsVariantOverrides
  >;
  width?: string;
  height?: string;
}

export interface DataSourceItem {
  [key: string]: string | number;
}

export interface DropdownFilterProps<T> {
  format: string;
  data: (string | number)[];
  onFilter: (item: string) => void;
  onOrder: (item: string) => void;
  onSelected: (item: string[]) => void;
}

export interface NumberFilterProps {
  onClick: (selectedOption: string) => void;
}

export interface PaginationProps {
  totalItems: number;
  pageSize: number;
}
