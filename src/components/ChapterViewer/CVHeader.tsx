import React from 'react'
import useJSS from './style'

function CVHeader() {
  const classes = useJSS()
  return (
    <div className={classes.CVHeader}>
      Chapters
    </div>
  )
}

export default CVHeader