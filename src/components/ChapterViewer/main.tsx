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
          <Chapter chapterName={'1. asdfasd'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'2. asdfsdf'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'3. asdfsdf'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'4. asdfsdf'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'5. asdfsdf'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'6. asdfsdf'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'7. asdfsdf'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'8. asdfsdd'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'9. asdfsdf'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'10. asdfsdf'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'11. asdfsdf'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'12. asdfsdf'}>
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