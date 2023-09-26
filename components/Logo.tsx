import React from 'react'
import LogoStyles from './Logo.module.css'

export default function Logo() {
  return (
    <div className={LogoStyles.logo}>
        <img
        width={25}
        src='/favicon.png'/>
        <span>Prüfungsvorbereitung</span>
    </div>
  )
}
