"use client"

import { useState } from 'react';
import styles from './ToggleSwitch.module.css';

export default function ToggleSwitch( props ) {

  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn(!isOn);
    props.isOnHandler(!isOn);
  };

  return (
    <div className={`${styles.switch} ${isOn ? styles.bgOn : ''}`} onClick={handleToggle}>
      <div className={`${styles.slider} ${isOn ? styles.on : ''}`}></div>
    </div>
  );
}