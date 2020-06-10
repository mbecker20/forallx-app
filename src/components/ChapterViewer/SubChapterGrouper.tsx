import React from 'react'
import { useSpring, animated } from 'react-spring';

interface Props {
  isOpen: boolean,
}

function SubChapterGrouper({ isOpen }: Props) {
  const spring = useSpring({
    height: isOpen ? '100' : '0',
    width: '5px',
  })
  return (
    <animated.svg style={spring}>
      <animated.rect width={'5px'} height={'100%'} fill='black'/>
    </animated.svg>
  );
}

export default SubChapterGrouper