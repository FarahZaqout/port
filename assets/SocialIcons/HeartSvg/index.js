import React from 'react'

const HeartSvg = (props) => {
  return (
    <svg height="100" width="100" viewBox="0 0 210 200" className="heart-svg">
      <path
        d="M 50,50 L50,150"
        style= { {stroke: '#000', strokeWidth: 2 } }
      >
      </path>
      <path
        d="M 50,150 L150,150"
        style= { {stroke: '#000', strokeWidth: 2 } }
      >
      </path>
        <path
        d="M 150,150 L150,50"
        style= { {stroke: '#000', strokeWidth: 2 } }
      >
      </path>
      <path
        d="M 150,50 L50,50"
        style= { {stroke: '#000', strokeWidth: 2 } }
      >
      </path>
      <path
        d="M 150,50 L50,50"
        style= { {stroke: '#000', strokeWidth: 2 } }
      >
      </path>
      <circle cx="150" cy="100" r="50" className="lower-circle"
        fill="transparent" strokeWidth="2" stroke="#000"/>
      <circle className="upper-circle" cx="100" cy="50" r="50"
        fill="transparent" strokeWidth="2" stroke="#000"/>
    </svg>
    );
}

export default HeartSvg
