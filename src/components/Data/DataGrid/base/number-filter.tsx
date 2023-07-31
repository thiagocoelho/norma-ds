import React, { useState } from "react";

import styles from "../styles/number-filter.module.css";
import { NumberFilterProps } from '../types';



const NumberFilter: React.FC<NumberFilterProps> = ({ onClick }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onClick(selectedValue);
  };

  return (
    <div className={styles.boxNumberFilter}>
      <ul>
        <li>
          <button>Equal...</button>
        </li>
        <li>
          <button>Does not equal...</button>
        </li>
        <li>
          <button>Greater than...</button>
        </li>
        <li>
          <button>Greater than or equal to...</button>
        </li>
        <li>
          <button>Less than...</button>
        </li>
        <li>
          <button>Less than or equal to...</button>
        </li>
        <li>
          <button>Between...</button>
        </li>
      </ul>
    </div>
  );
};

export default NumberFilter;
