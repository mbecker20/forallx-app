import React from 'react'
import useJSS from './style'

interface Props {
  text: string
}

function TopBar({ text }: Props) {
  const classes = useJSS()
  return (
    <div className={classes.TopBar}>
      {text}
    </div>
  )
}

export default TopBar