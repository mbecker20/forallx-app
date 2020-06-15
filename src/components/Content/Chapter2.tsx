import React from 'react'
import { RouteComponentProps } from '@reach/router';
import useJSS from './style';

function Chapter2(props: RouteComponentProps) {
  const classes = useJSS()
  return (
    <div className={classes.Content}>
<h1 id="sentential-logic"><strong>Sentential logic</strong></h1>
<p>This chapter introduces a logical language called SL. It is a version of <em>sentential logic</em>, because the basic units of the language will represent entire sentences. (Recall from §1.2 that we’re only considering propositional sentences.)</p>
<h2 id="sentence-letters"><strong>Sentence letters</strong></h2>
<p>In SL, capital Roman letters ( etc.) are used to represent basic sentences. Considered only as a symbol of SL, the letter h  could mean any sentence. So when translating from English into SL, it is important to provide a <em>symbolization key</em>. The key provides an English language sentence for each sentence letter used in the symbolization.</p>
<p>For example, consider this argument:</p>
<p>Today is New Year’s Day.</p>
<p>If today is New Year’s Day, then people are swimming in English Bay.</p>
<p>People are swimming in English Bay.</p>
<p>This is obviously a valid argument in English. In symbolizing it, we want to preserve the structure of the argument that makes it valid. What happens if we replace each sentence with a letter? Our symbolization key would look like this:</p>
<p>Today is New Year’s Day.</p>
<p>If today is New Year’s Day, then people are swimming in English Bay.</p>
<p>People are swimming in English Bay.</p>
<p>We could then symbolize the argument in this way:</p>
<p>This is a possible way to symbolize this argument, but it’s not a very interesting one. There is no necessary connection between some sentence , which could be any sentences. Something important about the argument has been lost in translation. The original argument was valid, but this translation of the argument does not reflect that validity. Given a different symbolization key, for example, the same argument form</p>
<p>could equally well stand in for this invalid argument:</p>
<p>Today is Christmas Day.</p>
<p>Tiny Tim has difficulty walking without crutches.</p>
<p>We’re all going to die tomorrow.</p>
<p>A more interesting translation of the valid New Year’s argument will show how it is different from the invalid Christmas argument. The relevant thing about the New Year’s argument is that the second premise is not just <em>any</em> sentence. Notice that the second premise contains the first premise and the conclusion <em>as parts</em>. Our symbolization key for the argument only needs to include meanings for <span><em>A</em></span> and <span><em>C</em></span>, and we can build the second premise from those pieces. So we symbolize the argument this way:</p>

<p>This preserves the structure of the argument that makes it valid, but it still makes use of the English expression ‘If<span>…</span> then<span >…</span>.’ Although for our formal language we ultimately want to replace all of the English expressions with logical notation, this is a good start.</p>
<p>The sentences that can be symbolized with sentence letters are called <em>atomic sentences</em>, because they are the basic building blocks out of which more complex sentences can be built. Whatever logical structure a sentence might have is lost when it is translated as an atomic sentence. From the point of view of SL, the sentence is just a letter. It can be used to build more complex sentences, but it cannot be taken apart.</p>
<p>We use capital Roman alphabet letters to represent SL sentences. There are only twenty-six such letters. We don’t want to impose this artificial limit onto our formal language; it’s better to work with a language that allows an arbitrary number of atomic sentences. To achieve this, we allow atomic sentences that have a capital letter with a numerical subscript. So we could have a symbolization key that looks like this:</p>
<p>Aang is from the Air Nation.</p>
<p>Aang is vegetarian.</p>
<p>Aang can bend water.</p>
<p>Toph is blind.</p>
<p>Toph likes badgers.</p>
<p>Toph invented metal bending.</p>
<p>Keep in mind that each of these is a different atomic sentence. Although it is often convenient, for making it easier to remember what each letter stands for, to use letters corresponding to the sentences’ subject matters, as in the example above, no such requirement is built into the rules of SL. There is no special relationship between <span><em>A</em><sub>1</sub></span> and <span><em>A</em><sub>2</sub></span>, as far as SL goes. It’s just for our convenience that we might choose to make all the <span><em>A</em></span> sentences about Aang.</p>
<h2 id="connectives">Connectives</h2>
<p>Logical connectives are used to build complex sentences from atomic components. There are five logical connectives in SL. This table summarizes them. They are explained below.</p>
    </div>
  );
}

export default Chapter2