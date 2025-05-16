import React from 'react'
import { Button } from './ui/button'

const ButtonUI = (props) => {
  return (
    <button variant="primary" className={`${props.className} bg-black rounded-full text-white w-full py-3 cursor-pointer text-center hover:bg-gray-100 hover:text-black hover:transition-all hover:duration-300 hover:border hover:border-gray-600`}>{props.btnName}</button>
  )
}

export default ButtonUI