import React from 'react'
import { animated, useSpring } from 'react-spring'
import useJSS from './style'
import colors from '../../theme';

interface Props {
  isOpen?: boolean,
  children: React.ReactNode,
}

function SubChapter({ isOpen, children }: Props) {
  const classes = useJSS(colors)
  const springStyle = useSpring({
    height: isOpen ? '4vmin' : '0vmin',
    transform: isOpen ? 'scaleY(1)' : 'scaleY(0)',
    opacity: isOpen ? 1 : 0,
    padding: isOpen ? '10px' : '0px'
  })

  return (
    <animated.div className={classes.SubChapter} style={springStyle}>
      {children}
    </animated.div>
  );
}

export default SubChapter