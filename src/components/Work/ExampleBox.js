import React from 'react';

export default function ExampleBox(props) {
  const { className, title, number, description } = props
  return (
    <div className={className}>
    <div className="concepts__project">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
      <h3>{number}</h3>
    </div>
  )
}
