import React from 'react';
import styles from '../styles/LawInfo.module.css'

const LawInfo = ({ lawName, lawMakerName, currentState, lawType, onEditClick }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Хуулийн төслийн мэдээлэл</h2>
      <button onClick={onEditClick} className={styles.button}>Edit</button>
      <p className={styles.item} id={styles.item1}>
        <strong className={styles.label}>Төслийн нэр</strong> <h3 className={styles.txt}>{lawName}</h3>
      </p>
      <p className={styles.item} id={styles.item2}>
        <strong className={styles.label}>Хууль санаачлагч</strong> <h3 className={styles.txt}>{lawMakerName}</h3>
      </p>
      <p className={styles.item} id={styles.item3}>
        <strong className={styles.label}>Төслийн явц</strong> <h3 className={styles.txt}>{currentState}</h3>
      </p>
      <p className={styles.item} id={styles.item4}>
        <strong className={styles.label}>Төслийн төрөл</strong> <h3 className={styles.txt}>{lawType}</h3>
      </p>
    </div>
  );
};

export default LawInfo;