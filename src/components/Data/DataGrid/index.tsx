import React, { useState, useRef, useEffect } from 'react';
import datatable from './styles/styles.module.css';
import DropdownFilter from './base/dropdown';
import Sorting from './base/sorting';
import { Pagination as MuiPagination } from '@mui/material';
import { Icons } from '../Icon/DefaultIcon';

import {
  filterDataSource,
  filterItemsByColumn,
  generateRandomDataSource,
  groupByDataSource,
  sortDataSourceByColumn,
} from './shared';
import { DataTableProps, DataSourceItem } from './types';
import { useTranslation } from 'react-i18next';
import { Box } from '../../Layout/Box';

import styled, { css } from 'styled-components';

// function groupByDataSource(dataSource: DataSourceItem[], key: string): Record<string, any>[] {
//   const groupedValues: Record<string, any>[] = [];

//   dataSource.forEach((item) => {
//     const value = item[key].toString();
//     const groupObj = { group: value };
//     if (!groupedValues.some((obj) => obj.group === value)) {
//       groupedValues.push(groupObj);
//     }
//   });

//   return groupedValues;
// }

const dataSource = generateRandomDataSource(20);

export const DataGrid = ({ data, variant = 'standard', ...rest }: DataTableProps) => {
  const { t } = useTranslation();

  const pageSize = 10;
  const columns = data[0].columns;

  // console.log('DATAGRID DATA => ', data);

  const totalRecords = dataSource.length;
  const totalPages = Math.ceil(totalRecords / pageSize);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalRecords);

  const sortRefs = useRef<(React.RefObject<HTMLTableHeaderCellElement> | null)[]>(
    new Array(columns.length).fill(null),
  );

  const [sorting, setSorting] = useState('down');
  const [sortingActive, setSortingActive] = useState<string>('down');
  const [currentActiveSorting, setCurrentActiveSorting] = useState<string | undefined>('Data');
  const [currentDropDownActive, setCurrentDropDownActive] = useState<string | undefined>('');
  const [currentActiveFilter, setCurrentActiveFilter] = useState<string | undefined>();

  const [originalDataSource, setOriginalDataSource] = useState(dataSource);
  const [newDataSource, setDataSource] = useState(originalDataSource);

  const { width, height } = rest;

  const handleDropDown = (item: any) => {
    setCurrentDropDownActive(item === currentDropDownActive ? null : item);
    if (item !== currentDropDownActive) {
      setCurrentActiveSorting(item);
    }
  };

  const handleSorting = (sort: string) => {
    setSorting(sort === 'up' ? 'up' : 'down');
    setCurrentActiveSorting(currentDropDownActive);
    handleDropDown(currentDropDownActive);
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const handleFilter = (filter: string) => {
    const dataSourceFiltered = filterDataSource(
      dataSource,
      !currentActiveSorting ? 'id' : currentActiveSorting,
      filter,
    );
    setDataSource(sortDataSourceByColumn(dataSourceFiltered.slice(startIndex, endIndex), 'id', 'desc'));
  };

  const handleSelected = (selected: string[]) => {
    let dataSourceSelected;

    if (selected.length === 0) {
      // Exibir todos os itens
      dataSourceSelected = dataSource.slice(startIndex, endIndex);
    } else {
      // Filtrar os itens com base na coluna e valores selecionados
      dataSourceSelected = filterItemsByColumn(
        dataSource,
        !currentActiveSorting ? 'id' : currentActiveSorting,
        selected,
      );
    }

    // Ordenar os itens e atualizar o estado
    setDataSource(sortDataSourceByColumn(dataSourceSelected.slice(startIndex, endIndex), 'id', 'desc'));
  };

  useEffect(() => {
    setOriginalDataSource(dataSource);
    setDataSource(sortDataSourceByColumn(dataSource, 'data', 'desc'));
  }, [dataSource]);

  useEffect(() => {
    if (sorting && currentActiveSorting) {
      const sortedData = sortDataSourceByColumn(
        originalDataSource,
        currentActiveSorting,
        sorting === 'down' ? 'asc' : 'desc',
      );
      setDataSource(sortedData.slice(startIndex, endIndex));
    }
  }, [sorting, currentActiveSorting, originalDataSource, currentPage]);

  console.log('VARIANT => ', [sorting, sortingActive, currentActiveSorting]);

  const Table = styled.table`
    width: ${width};
    height: ${height};
    border-collapse: collapse;
    display: table;
    margin-bottom: 1rem;
    color: var(--table-color);
    vertical-align: top;
    border-color: var(--table-border-color);
    caption-side: bottom;
    border-collapse: collapse;
    text-indent: initial;
    border-spacing: 2px;

    thead tr th {
      padding: 5px 10px;
      height: 40px;
      text-align: left;
      vertical-align: inherit;
      min-width: 50px;
      padding-right: 30px;
      display: table-cell;
      font-weight: bold;
      position: relative;
      vertical-align: bottom;
      border-bottom: 1px solid #e0e0e0;

      button {
        background: none;
        border: 0;
        cursor: pointer;
        font: normal normal 600 16px/22px 'Source Sans Pro';
        text-align: left;
        top: -10px;
        position: relative;

        &.arrows {
          top: 0;
          position: absolute;
          right: 10px;
        }
      }

      img {
        position: absolute;
        top: 22px;
        right: 15px;
      }
    }

    tbody tr td {
      border-color: transparent;
      border-right-width: 1px;
      border-left-width: 0;
      border-top-width: 0;
      border-bottom-width: 0;
      padding: 5px 10px;
      height: 40px;

      ${variant === 'standard-divider' &&
      css`
        border-color: #cccccc;

        &:last-child {
          border-right-width: 0;
        }
      `}
      ${variant === 'quiet-divider' &&
      css`
        border-color: #cccccc;

        &:last-child {
          border-right-width: 0;
        }
      `}
    }

    ${variant === 'standard' &&
    css`
      tr:nth-child(even) {
        background-color: var(--table-striped-bg);
      }
    `}

    ${variant === 'standard-divider' &&
    css`
      tr:nth-child(even) {
        background-color: var(--table-striped-bg);
      }
    `}

    ${variant === 'standard-selectable' &&
    css`
      tr:nth-child(even) {
        background-color: var(--table-striped-bg);
      }
      ,
      tr:hover {
        background-color: var(--table-hover-bg);
      }
    `}

    ${variant === 'quiet' &&
    css`
      tr {
        background-color: inherit;
      }
    `}

    ${variant === 'quiet-divider' &&
    css`
      tr {
        background-color: inherit;
      }
    `}

    ${variant === 'quiet-selectable' &&
    css`
      tr {
        background-color: inherit;
      }
      ,
      tr:hover {
        background-color: var(--table-hover-bg);
      }
    `}
  `;

  return (
    <Box sx={{ width: '100%', overflowX: 'auto', minHeight: 480 }}>
      <div className={datatable.tableHeader}>
        <h3>
          {totalRecords} {t('datagridResult')}
        </h3>
        <button className={datatable.button} type="button">
          <Icons icon="cog" scale="large" />
        </button>
      </div>
      <Table>
        <thead>
          <tr>
            {columns &&
              columns.map((item: any, key: any) => (
                <th key={key} ref={ref => (sortRefs.current[key] = ref)}>
                  <button
                    type="button"
                    onClick={() => {
                      handleDropDown(item.field);
                    }}
                  >
                    {item.headerText}
                  </button>
                  {currentActiveSorting === item.field && <Sorting sort={sortingActive} active={true} />}
                  {currentActiveSorting !== item.field && <Sorting sort={'down'} active={false} />}
                  {currentDropDownActive && currentDropDownActive === item.field && (
                    <DropdownFilter
                      format={item.format}
                      onOrder={handleSorting}
                      onFilter={handleFilter}
                      onSelected={handleSelected}
                      data={groupByDataSource(dataSource, item.field)}
                    />
                  )}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {newDataSource &&
            newDataSource.map((item: DataSourceItem, key: number) => (
              <tr key={key}>
                {Object.keys(item).map(columnKey => (
                  <td key={columnKey}>{item[columnKey]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </Table>
      <div className={datatable.pagination}>
        <MuiPagination count={totalPages} page={currentPage} onChange={handleChangePage} />
      </div>
    </Box>
  );
};

DataGrid.defaultProps = {
  variant: 'stardand',
  width: '100%',
  height: '640px',
  data: dataSource,
};
