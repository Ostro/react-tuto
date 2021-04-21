import React from 'react'
import './BaseButton.css'

const BaseButton = ({ title, onClick, variant }) => {
  return (
    <button className={`${variant === 'mini' ? 'mini' : 'default'} baseButton`} onClick={onClick}>{title}</button>
  )
}

export default BaseButton;