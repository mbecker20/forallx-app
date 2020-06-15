import React from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'
import { Router } from '@reach/router'
import useJSS from './style'
import About from '../components/Content/About'
import Chapter1 from '../components/Content/Chapter1'
import Chapter2 from '../components/Content/Chapter2'


function App() {
  const classes = useJSS()
  return (
    <div>
      <TopBar text='forall x ubc' />
      <SideBar />
      <Router className={classes.Router} primary={false}>
        <About default/>
        <Chapter1 path='chapter1'/>
        <Chapter2 path='chapter2'/>
      </Router>
    </div>
  )
}

export default App
