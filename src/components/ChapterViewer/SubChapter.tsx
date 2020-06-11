import React from 'react'
import { animated, useSpring } from 'react-spring'
import useJSS from './style'
import { colors } from '../../theme';

interface Props {
  isOpen?: boolean,
  children: React.ReactNode,
}

function SubChapter({ isOpen, children }: Props) {
  const numChars = (children as String).length
  const classes = useJSS(colors)
  const springStyle = useSpring({
    height: isOpen ? `${Math.floor(numChars/10)*4}vmin` : '0vmin',
    transform: isOpen ? 'scaleY(1)' : 'scaleY(0)',
    opacity: isOpen ? 1 : 0,
    padding: isOpen ? '5px' : '0px',
    config: {
      tension: 220,
      clamp: true,
      easing: t => t*t
    },
  })

  return (
    <animated.div className={classes.SubChapter} style={springStyle}>
      {children}
    </animated.div>
  );
}

export default SubChapter