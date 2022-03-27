import React from "react";
import styles from './switchControl.module.css';

export const SwitchControl = ({enabled, onClick}) => {
  const className = `${styles.button} ${enabled ? styles.isActive : ''}`;
  const text = enabled ? 'On' : 'Off'

  return (
    <label className={styles.buttonLabel}>
      <button className={className} onClick ={onClick}>
        {text}
      </button>
    </label>
  )
}

