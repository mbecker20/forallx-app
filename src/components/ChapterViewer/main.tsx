import React from 'react'
import Chapter from './Chapter'
import SubChapter from './SubChapter'
import useJSS from './style'
import CVHeader from './CVHeader'

function ChapterViewer() {
  const classes = useJSS()
  return (
    <div className={classes.Bounder}>
      <CVHeader />
      <div className={classes.CVContainer}>
        <div className={classes.CVInnerContainer}>
          <Chapter chapterName={'Chapter 1'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'Chapter 2'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'Chapter 3'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'Chapter 4'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'Chapter 5'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'Chapter 6'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'Chapter 7'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'Chapter 8'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'Chapter 9'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'Chapter 10'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'Chapter 11'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'Chapter 12'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
        </div>
      </div>
    </div>
  )
}

export default ChapterViewer