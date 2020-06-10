import React from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'
import useJSS from './style'
import colors from '../theme'
import { Router } from '@reach/router'

function App() {
  const classes = useJSS(colors)
  return (
    <div>
      <TopBar text='forall x' />
      <SideBar />
      <Router className={classes.Router}>
        {
          // textbook sections
        }
      </Router>
    </div>
  )
}

export default App
