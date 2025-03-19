import React from 'react'
import { Button } from './ui/button'

const ButtonUI = (props) => {
  return (
    <Button variant="primary" className={`${props.className} bg-black md:w-[40%] rounded-full text-white w-full py-2 cursor-pointer text-center hover:bg-gray-100 hover:text-black hover:transition-all hover:duration-300 hover:border hover:border-gray-600`}>{props.btnName}</Button>
  )
}

export default ButtonUI