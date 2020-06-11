import React from 'react';
import useJSS from './style'
import { ChapterViewer } from '../components/all';
//import { navigate } from '@reach/router'

function SideBar() {
  const classes = useJSS()
  return (
    <div className={classes.SideBar}>
      <ChapterViewer />
    </div>
  )
}

export default SideBar