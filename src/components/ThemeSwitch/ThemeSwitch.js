import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import styles from './ThemeSwitch.module.css'

export default function ThemeSwitch() {
    const theme = useContext(ThemeContext)
    console.log(theme);
    const toggleSwitch = e => {
        // theme.dispatch({type:""})
        if(e.target.checked) theme.dispatch({type: "LIGHTMODE"})
        else theme.dispatch({type: "DARKMODE"})
    }
    return (
    <label className={styles.Switch} >
        <input type="checkbox" onClick={toggleSwitch}/>
        <span className={styles.Slider}></span>
    </label>
  )
}
