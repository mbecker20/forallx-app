import React, { ReactNode, ReactElement, Children, cloneElement } from 'react'
import useJSS from './style'

interface Props {
  children: ReactNode,
  selectedState: any,
}

function CVInnerContainer({ children, selectedState }: Props) {
  const classes = useJSS()
  const childrenWithState = Children.map(children, (child) => cloneElement(child as ReactElement, { selectedState }))
  return (
    <div className={classes.CVInnerContainer}>
      {childrenWithState}
    </div>
  );
}

export default CVInnerContainer