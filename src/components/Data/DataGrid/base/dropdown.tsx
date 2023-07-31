import { useState, Fragment, useEffect } from 'react';
import styles from '../styles/dropdown.module.css';
import NumberFilter from './number-filter';
import { TextField, Button } from '@mui/material';
import { Search } from '@mui/icons-material';
import { DropdownFilterProps } from '../types';

const DropdownFilter = ({ onOrder, onFilter, onSelected, format, data }: DropdownFilterProps<any>) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [checkAll, setCheckAll] = useState<boolean>(false);

  const handleFilter = () => {
    setOpenFilter(prevState => !prevState);
  };

  const handleCheckboxChange = (option: string) => {
    setCheckAll(false);
    setSelectedOptions(prevOptions => {
      if (prevOptions.includes(option)) {
        return prevOptions.filter(item => item !== option);
      } else {
        return [...prevOptions, option];
      }
    });
  };

  const toggleCheckAll = () => {
    setCheckAll(prevState => !prevState);
    setSelectedOptions(prevOptions => {
      if (!checkAll) {
        return data.map(item => String(item));
      } else {
        return [];
      }
    });
  };

  useEffect(() => {
    onSelected(selectedOptions);
  }, [selectedOptions]);

  return (
    <div className={styles.dropdown}>
      <ul>
        <li>
          <button
            onClick={() => {
              onOrder('down');
              setOpenFilter(false);
            }}
          >
            Classificar de A a Z
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onOrder('up');
              setOpenFilter(false);
            }}
          >
            Classificar de Z a A
          </button>
        </li>
        <li className={styles.dropDown_numbers}>
          <button onClick={handleFilter}>
            Filtro por números
            <span>{'>'}</span>
          </button>
          {openFilter && (
            <Fragment>
              <NumberFilter onClick={() => console.log('Me clicou')} />
            </Fragment>
          )}
        </li>
        <li className={styles.search}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            fullWidth
            onChange={ev => onFilter(ev.target.value)}
          />
          <button>
            <Search />
          </button>
        </li>
        <li>
          <div className={styles.boxListDataColumn}>
            <ol>
              <li>
                <input type="checkbox" checked={checkAll} onChange={toggleCheckAll} /> Select All
              </li>
              {data.map((item, key) => (
                <li key={key}>
                  <>
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(item.toString())}
                      onChange={() => handleCheckboxChange(item.toString())}
                    />{' '}
                    {item}
                  </>
                </li>
              ))}
            </ol>
          </div>
        </li>
      </ul>
      <Button variant="outlined" sx={{ align: 'right' }}>
        Confirm
      </Button>
    </div>
  );
};

export default DropdownFilter;
