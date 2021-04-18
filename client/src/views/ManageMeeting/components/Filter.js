import React from 'react';

import styles from '../styles/ManageMeeting.module.css'
import DateFilter from './DateFilter';

import Search from './Search';

const Filter = ()=> {
  return(
    <div className={styles.filter}>
      <div><Search /></div>
      <div><DateFilter label='From'/></div>
      <div><DateFilter label='To'/></div>
    </div>
  )
}

export default Filter;