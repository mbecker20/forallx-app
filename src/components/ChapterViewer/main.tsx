import React, { useState } from 'react'
import Chapter from './Chapter'
import SubChapter from './SubChapter'
import useJSS from './style'
import CVInnerContainer from './CVInnerContainer'
import { useSpring, animated } from 'react-spring'

let timeoutID = 0

function ChapterViewer() {
  const classes = useJSS()
  const [selectedSC, setSelectedSC] = useState('') // the highlighted sub chapter
  const selectedState = {
    selectedSC: selectedSC,
    setSelectedSC: setSelectedSC
  }
  const [scrollbarVisible, setSBVisible] = useState(false) // auto hide scroll bar
  function onScroll() {
    setSBVisible(true)
    window.clearTimeout(timeoutID)
    timeoutID = window.setTimeout(() => {setSBVisible(false)}, 500)
  }
  const scrollbarSpring = useSpring({
    borderColor: scrollbarVisible ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0)',
  })
  return (
    <div className={classes.Bounder}>
      <div className={classes.CVHeader}>
        <strong>Chapters</strong>
      </div>
      <animated.div className={classes.CVContainer} onScroll={onScroll} style={scrollbarSpring}>
        <CVInnerContainer selectedState={selectedState}>
          <Chapter chapterName='1. What is logic?' chapterPath='chapter1'>
            <SubChapter section='#what-is-logic' id='1.0'>Introduction</SubChapter>
            <SubChapter section='#arguments' id='1.1'>1.1 Arguments</SubChapter>
            <SubChapter section='#sentences-and-propositions' id='1.2'>1.2 Sentences and propositions</SubChapter>
            <SubChapter section='#two-ways' id='1.3'>1.3 Two ways that arguments can go wrong</SubChapter>
            <SubChapter section='#validity' id='1.4'>1.4 Validity</SubChapter>
            <SubChapter section='#impossibility' id='1.5'>1.5 Impossibility</SubChapter>
            <SubChapter section='#other-logical-notions' id='1.6'>1.6 Other logical notions</SubChapter>
            <SubChapter section='#formal-languages' id='1.7'>1.7 Formal languages</SubChapter>
            <SubChapter section='#practice-exercises' id='1.8'>Practice Exercises</SubChapter>
          </Chapter>
          <Chapter chapterName={'2. Sentenial logic'} chapterPath='chapter2'>
            <SubChapter id='2.0'>Chapter 2 test</SubChapter>
          </Chapter>
          <Chapter chapterName={'3. Truth tables'}>
            <SubChapter id='3.0'>SubChapter A</SubChapter>
            <SubChapter id='3.1'>SubChapter B</SubChapter>
            <SubChapter id='3.2'>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'4. Entailment and Models for SL'}>
            <SubChapter id='4.0'>SubChapter A</SubChapter>
            <SubChapter id='4.1'>SubChapter B</SubChapter>
            <SubChapter id='4.2'>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'5. SL Trees'}>
            <SubChapter id='5.0'>SubChapter A</SubChapter>
            <SubChapter id='5.1'>SubChapter B</SubChapter>
            <SubChapter id='5.2'>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'6. Soundness and Completeness for SL Trees'}>
            <SubChapter id='6.0'>SubChapter A</SubChapter>
            <SubChapter id='6.1'>SubChapter B</SubChapter>
            <SubChapter id='6.2'>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'7. Natural Deduction Proofs in SL'}>
            <SubChapter id='7.1'>SubChapter A</SubChapter>
            <SubChapter id='7.2'>SubChapter B</SubChapter>
            <SubChapter id='7.3'>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'8. Quantified logic'}>
            <SubChapter id='8.0'>SubChapter A</SubChapter>
            <SubChapter id='8.1'>SubChapter B</SubChapter>
            <SubChapter id='8.2'>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'9. A formal semantics for QL'}>
            <SubChapter id='9.0'>SubChapter A</SubChapter>
            <SubChapter id='9.1'>SubChapter B</SubChapter>
            <SubChapter id='9.2'>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'10. QL Trees'}>
            <SubChapter id='10.0'>SubChapter A</SubChapter>
            <SubChapter id='10.1'>SubChapter B</SubChapter>
            <SubChapter id='10.2'>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'11. Soundness and Completeness for QL Trees'}>
            <SubChapter id='11.0'>SubChapter A</SubChapter>
            <SubChapter id='11.1'>SubChapter B</SubChapter>
            <SubChapter id='11.2'>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'12. Identity'}>
            <SubChapter id='12.0'>SubChapter A</SubChapter>
            <SubChapter id='12.1'>SubChapter B</SubChapter>
            <SubChapter id='12.2'>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'13. Natural Deduction Proofs in QL'}>
            <SubChapter id='13.0'>SubChapter A</SubChapter>
            <SubChapter id='13.1'>SubChapter B</SubChapter>
            <SubChapter id='13.2'>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'reference'}>
            <SubChapter id='14.0'>SubChapter A</SubChapter>
            <SubChapter id='14.1'>SubChapter B</SubChapter>
            <SubChapter id='14.2'>SubChapter C</SubChapter>
          </Chapter>
        </CVInnerContainer>
      </animated.div>
    </div>
  )
}

export default ChapterViewer