import React, { useState, Children, cloneElement } from 'react'
import useJSS from './style'
import { colors } from '../../theme'
import { animated, useSpring } from 'react-spring'

interface Props {
  children: React.ReactNode
  chapterName: string
  selectedState?: any
  chapterID?: string
}

function Chapter({ chapterName, chapterID, children, selectedState }: Props) {
  const classes = useJSS()
  const [open, setOpen] = useState(false)

  function toggleOpen() {
    setOpen(!open)
  }

  const [highlighted, setHighlighted] = useState(false)

  const headerSpring = useSpring({
    color: highlighted ? colors.selectedText : colors.text
  })

  const childrenWithProps = Children.map(children, (child, index) => {
    return cloneElement(child as React.ReactElement, { 
      isOpen: open, 
      key: index, 
      selectedState: selectedState,
      chapter: chapterID
    })
  })

  return (
    <div className={classes.Chapter}>
      <animated.div 
        className={classes.ChapterName} 
        onClick={toggleOpen}
        style={headerSpring}
        onPointerEnter={() => {setHighlighted(true)}}
        onPointerLeave={() => {setHighlighted(false)}}
      >{chapterName}</animated.div>
      <div className={classes.SubChapterBounder}>
        {childrenWithProps}
      </div>
    </div>
  );
}

export default Chapter;