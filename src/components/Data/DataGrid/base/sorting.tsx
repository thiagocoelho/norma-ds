import React from 'react';
import { SortingProps } from '../types';
import { Icons } from '../../Icon/DefaultIcon';

const Sorting: React.FC<SortingProps> = ({ sort, active }) => {
  const sortIcon = (
    <Icons scale="small" icon={`arrow${sort}`} color={active === true ? 'black' : 'inherit'} />
  );
  const opacityValue = active ? 1 : 0.5;

  return (
    <button type="button" style={{ opacity: opacityValue }} className="arrows">
      {sort && sortIcon}
    </button>
  );
};

export default Sorting;
