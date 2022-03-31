import React from 'react'
import "./AppText.css"

const AppText = ({name, invert, large, header, style }) => {
  const inverted = invert ? "invert": "";
  const head = header ? "header": "";
  const _large = large ? "large": "";

  return (
    <p className={`name ${inverted} ${head} ${_large}`} style={style}>{name}</p>
  )
}

export default  AppText;