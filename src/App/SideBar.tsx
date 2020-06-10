import React from 'react';
import colors from '../theme';
import useJSS from './style'
import { ChapterViewer } from '../components/all';
//import { navigate } from '@reach/router'

function SideBar() {
  const classes = useJSS(colors)
  return (
    <div className={classes.SideBar}>
      <ChapterViewer />
    </div>
  )
}

export default SideBar