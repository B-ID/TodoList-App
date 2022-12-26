import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='text-5xl sm:text-6xl md:text-7xl text-center text-white py-4 z-10'>Taskify</div>
  )
}