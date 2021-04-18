import React from 'react';

import styles from '../styles/ManageMeeting.module.css'

import Search from './Search';
import FromDate from './FromDate';
import ToDate from './ToDate';

const Filter = ()=> {
  return(
    <div className={styles.filter}>
      <div><Search /></div>
      <div><FromDate /></div>
      <div><ToDate /></div>
    </div>
  )
}

export default Filter;