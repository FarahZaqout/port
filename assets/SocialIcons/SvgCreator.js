import React from 'react'

export default function Svg(props) {
  const {className, direction} = props

  if (typeof direction !== 'string') {
    console.log('svg creator must receive its direction tag as a string')
    return null
  } 
    
  return <svg aria-hidden="true" className={className} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path 
      d={direction}>
    </path>
  </svg>
}