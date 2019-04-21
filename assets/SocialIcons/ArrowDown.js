import React from 'react'
import SVG from './SvgCreator'

const direction = "M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"

export default function(props) {
  return <SVG direction={direction} fill={props.fill} className={props.className}/>
}
