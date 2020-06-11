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
          <Chapter chapterName={'1. What is logic?'}>
            <SubChapter>Introduction</SubChapter>
            <SubChapter>1.1 Arguments</SubChapter>
            <SubChapter>1.2 Sentences and propositions</SubChapter>
            <SubChapter>1.3 Two ways that arguments can go wrong</SubChapter>
            <SubChapter>1.4 Validity</SubChapter>
            <SubChapter>1.5 Impossibility</SubChapter>
            <SubChapter>1.6 Other logical notions</SubChapter>
            <SubChapter>1.7 Formal languages</SubChapter>
            <SubChapter>Practice Exercises</SubChapter>
          </Chapter>
          <Chapter chapterName={'2. Sentenial logic'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'3. Truth tables'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'4. Entailment and Models for SL'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'5. SL Trees'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'6. Soundness and Completeness for SL Trees'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'7. Natural Deduction Proofs in SL'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'8. Quantified logic'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'9. A formal semantics for QL'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'10. QL Trees'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'11. Soundness and Completeness for QL Trees'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'12. Identity'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'13. Natural Deduction Proofs in QL'}>
            <SubChapter>SubChapter A</SubChapter>
            <SubChapter>SubChapter B</SubChapter>
            <SubChapter>SubChapter C</SubChapter>
          </Chapter>
          <Chapter chapterName={'reference'}>
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