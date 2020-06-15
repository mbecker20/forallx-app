import React from 'react';
import { RouteComponentProps } from '@reach/router';
import useJSS from './style'

function About(props: RouteComponentProps) {
  const classes = useJSS()
  return (
    <div className={classes.About}>
      Homepage (about, etc)
    </div>
  );
}

export default About;