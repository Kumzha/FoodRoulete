"use client"

import { useState } from 'react';
import styles from './ToggleSwitch.module.css';

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={styles.switch} onClick={handleToggle}>
      <div className={`${styles.slider} ${isOn ? styles.on : ''}`}></div>
    </div>
  );
}