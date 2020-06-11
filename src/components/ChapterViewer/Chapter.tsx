import React, { useState, Children, cloneElement, ReactElement } from 'react'
import useJSS from './style'
import { colors } from '../../theme'

interface Props {
  children: React.ReactNode
  chapterName: string
  selectedState?: any
}

function Chapter({ chapterName, children, selectedState }: Props) {
  const [open, setOpen] = useState(false)
  const classes = useJSS(colors)

  function toggleOpen() {
    setOpen(!open)
  }

  const childrenWithProps = Children.map(children, (child, index) => {
    return cloneElement(child as React.ReactElement, { isOpen: open, key: index, selectedState: selectedState })
  })

  return (
    <div className={classes.Chapter}>
      <div className={classes.ChapterName} onClick={toggleOpen}>{chapterName}</div>
      <div className={classes.SubChapterBounder}>
        {childrenWithProps}
      </div>
    </div>
  );
}

export default Chapter;