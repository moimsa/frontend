import { useState } from 'react';
import React from 'react'

const Button = ({text, type, onClick}) => {

  return (
    <>
      <button className='Btn'>{text}</button>
    </>
  )
}

export default Button