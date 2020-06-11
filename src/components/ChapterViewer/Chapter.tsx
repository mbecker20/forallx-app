import React, { useState, Children, cloneElement } from 'react'
import useJSS from './style'
import { colors } from '../../theme'

interface Props {
  children: React.ReactNode
  chapterName: string
}

function Chapter({ chapterName, children }: Props) {
  const [open, setOpen] = useState(false)
  const classes = useJSS(colors)

  function toggleOpen() {
    setOpen(!open)
  }

  const childrenWithOpen = Children.map(children, (child, index) => {
    return cloneElement(child as React.ReactElement, { isOpen: open, key: index })
  })

  return (
    <div className={classes.Chapter}>
      <div className={classes.ChapterName} onClick={toggleOpen}>{chapterName}</div>
      <div className={classes.SubChapterBounder}>
        {childrenWithOpen}
      </div>
    </div>
  );
}

export default Chapter;