import React from 'react'
import ExampleBox from './ExampleBox'

export default function() {
  return (
    <div className="concepts">
      <div className="concepts__container">
        <h2>Concepts</h2>
        <ExampleBox
          className="concepts__odd-number"
          title="TWIG - The Medical Database"
          description="description"
          number="01"
          />
        <ExampleBox
          className="concepts__even-number"
          title="Concept Design - Facebook"
          description="description"
          number="02"
          />
        <ExampleBox
          className="concepts__odd-number"
          title="Concept Design - Twitter"
          description="description"
          number="03"
          />
        <ExampleBox
          className="concepts__even-number"
          title="Concept Design - Twitter"
          description="description"
          number="04"
          />
      </div>
    </div>
  )
}