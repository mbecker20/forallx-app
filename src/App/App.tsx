import React from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'
import useJSS from './style'
import { Router } from '@reach/router'
import Chapter1 from '../components/Content/Chapter1'

function App() {
  const classes = useJSS()
  return (
    <div>
      <TopBar text='forall x' />
      <SideBar />
      <Router className={classes.Router}>
        <Chapter1 path='/forallx-app/chapter1'/>
      </Router>
    </div>
  )
}

export default App
