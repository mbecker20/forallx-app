import React from 'react'
import { RouteComponentProps } from '@reach/router';
import useJSS from './style';

function Chapter1(props: RouteComponentProps) {
  const classes = useJSS()
  return (
    <div className={classes.Content}>
      <h1 id="what-is-logic">What is logic?</h1>
      <p>Logic is the business of evaluating arguments, sorting good ones from bad ones. In everyday language, we sometimes use the word ‘argument’ to refer to belligerent shouting matches. If you and a friend have an argument in this sense, things are not going well between the two of you. This is not the kind of ‘argument’ that will concern us. Arguments in the logical sense aren’t events that happen between people; a logical argument is structured to give someone a reason to believe some conclusion. Here are two examples of such arguments:</p>
      <ol type="1">
      <li><p>It is raining heavily.</p></li>
      <li><p>When it rains, everyone outside without an umbrella gets wet.</p></li>
      <li><p>[therefore] You should take an umbrella.</p></li>
      </ol>
      <ol type="1">
      <li><p>It is either raining or snowing.</p></li>
      <li><p>If it is colder than -10 degrees, it is not raining.</p></li>
      <li><p>It is -18 degrees.</p></li>
      <li><p>[therefore] It is snowing.</p></li>
      </ol>
      <p>The three dots on the last line of each argument mean ‘Therefore’ and they indicate that the final sentence is the <em>conclusion</em> of the argument. The other sentences are <em>premises</em> of the argument. If you believe the premises, then the argument provides you with a reason to believe the conclusion.</p>
      <p>This chapter discusses some basic logical notions that apply to arguments in a natural language like English. It is important to begin with a clear understanding of what arguments are and of what it means for an argument to be valid. Later we will translate arguments from English into a formal language. We want formal validity, as defined in the formal language, to have at least some of the important features of natural-language validity.</p>
      <h2 id="arguments"><strong>1.1 Arguments</strong></h2>
      <p>A crucial part of analyzing an argument is identifying its conclusion. Every argument has a conclusion — the conclusion is the claim the argument is trying to establish. Premises are starting-points, used to lend support to the conclusion. Often, the conclusion will be signified by words like ‘so’ or ‘therefore’. Premises might be marked by words like ‘because’. These words can give a clue as to just what the argument is supposed to be.</p>
      <p><strong>premise indicators:</strong> since, because, given that</p>
      <p><strong>conclusion indicators:</strong> therefore, hence, thus, then, so</p>
      <p>In a natural language like English, <em>sometimes</em>, arguments start with their premises and end with their conclusions, but not always. For some purposes in this course, we will be working with <em>idealizations</em> of natural language, where we work as if some generally applicable rules of thumb held without exception. Let’s define (a slightly technical notion of) an <strong>Argument</strong> as a series of sentences. The sentences at the beginning of the series are premises. The final sentence in the series is the conclusion.</p>
      <p>Here is an example of an argument:</p>
      <blockquote>
      <p>People get wet whenever it rains.</p>
      <p>It often rains in Vancouver.</p>
      <p>[therefore] People often get wet in Vancouver.</p>
      </blockquote>
      <p>The idea of an argument is that the premises are supposed to give you reason to accept the conclusion. If I’m trying to convince you that people often get wet in Vancouver — the conclusion of the argument above — convincing you of the two premises might be a good way to get you there.</p>
      <p>Notice that our definition of an argument is quite general. Consider this example:</p>
      <blockquote>
      <p>Vancouver has more churches than any other Canadian city.</p>
      </blockquote>
      <blockquote>
      <p>Two oboes are fighting a duel under the fireworks.</p>
      </blockquote>
      <blockquote>
      <p>[therefore] J. Edgar Hoover was an honest man.</p>
      </blockquote>
      <p>It may seem odd to call this an argument, but that is because it would be a terrible argument. The two premises have nothing at all to do with the conclusion. (Moreover, they aren’t very plausible.) Nevertheless, given our definition, it still counts as an argument — albeit a bad one. One of our central aims in formal logic is to provide rigorous, formal tests for evaluating arguments.</p>
      <h2 id="sentences-and-propositions"><strong>1.2 Sentences and propositions</strong></h2>
      <p>The premises and conclusions of arguments are sentences. But not just any English sentence is suitable for figuring into an argument. For example, questions count as grammatical sentences of English, but logical arguments never have questions as premises or conclusions. We are interested especially in sentences that can be true or false. Think of these as the sentences that purport to describe the way things are. Such sentences are sometimes described as expressing <em>propositions</em>.</p>
      <p>We will not be theorizing in terms of questions and other non-propositional sentences in formal logic. Since we are only interested in sentences that can figure as a premise or conclusion of an argument, we’ll define a technical notion of a <strong>Sentence</strong> as a sentence expressing a proposition, i.e., a sentence that can be true or false.</p>
      <p>Don’t confuse the idea of a sentence that can be true or false with the difference between fact and opinion. Often, sentences in logic will express things that would count as facts — such as ‘Kierkegaard was a hunchback’ or ‘Kierkegaard liked almonds.’ They can also express things that you might think of as matters of opinion — such as, ‘Almonds are yummy’ or ‘the U.S. invasion of Iraq was unjustified’. These are all examples of things that are either true or false.</p>
      <p>It is also important to keep clear the distinction between something’s being <em>true</em> and something’s being <em>known</em>. A sentence is the kind of thing that can be true or false; that doesn’t mean you’ll always be able to tell whether it is true or false. For example, ‘there are an even number of humans on Earth right now’ is a sentence. It is either true or false, even though it is pretty much impossible to tell which. Similarly, there are controversial propositions, where people disagree about whether they are true or false, and where it seems very difficult to settle the debate. (I think that ‘Freedom of expression requires restricting oppressive speech’ is an example.) This is either true or false, even if debates about which it is aren’t likely to resolve the question. So it counts as a propositional sentence.</p>
      <p>What are some examples of grammatical English sentences that do not express propositions? We’ve discussed one category already:</p>
      <h3 id="questions"><strong>Questions</strong></h3>
      <p>In a grammar class, ‘Are you sleepy yet?’ would count as an interrogative sentence. Although you might be sleepy or you might be alert, the question itself is neither true nor false. So ‘Are you sleepy yet?’ is not a sentence in our technical, propositional sense. Suppose you answer the question: ‘I am not sleepy.’ This <em>is</em> either true or false, and so it <em>is</em> a sentence in the logical sense. Generally, <em>questions</em> will not count as sentences, but <em>answers</em> will.</p>
      <p>‘What is this course about?’ is not a sentence. ‘No one knows what this course is about’ is a sentence.</p>
      <h3 id="imperatives"><strong>Imperatives</strong></h3>
      <p>Commands are often phrased as imperatives like ‘Wake up!’, ‘Sit up straight’, and so on. In a grammar class, these would count as imperative sentences. Although it might be good for you to sit up straight or it might not, the command is neither true nor false. Note, however, that commands are not always phrased as imperatives. ‘You will respect my authority’ <em>is</em> either true or false — either you will or you will not — and so it counts as a sentence in the logical sense.</p>
      <h3 id="exclamations"><strong>Exclamations</strong></h3>
      <p>Expressions like ‘Ouch!’ or ‘Boo, Yankees!’ are sometimes described as exclamatory sentences, but they are neither true nor false. We will treat ‘Ouch, I hurt my toe!’ as meaning the same thing as ‘I hurt my toe.’ The ‘ouch’ does not add anything that could be true or false.</p>
      <p>To recap: <em>sentences</em>, in the technical sense we’re interested in, are claims that can be true or false. One pretty good test you can run to see whether something is a sentence is to ask whether it makes sense to insert ‘it is true that’ or ‘it is false that’ in front of it. It’s perfectly fine to say ‘it is true that Kierkegaard liked almonds’ or ‘it is true that the U.S. invasion of Iraq was unjustified’. But it doesn’t make sense to say ‘it is true that are you sleepy yet’ or ‘it is true that sit up straight’.</p>
      <p>We will call truth or falsity the <strong>truth-value</strong> of a sentence.</p>
      <h2 id="two-ways-that-arguments-can-go-wrong"><strong>1.3 Two ways that arguments can go wrong</strong></h2>
      <p>Consider the argument that you should take an umbrella</p>
      <blockquote>
      <ol type="1">
      <li>It is raining heavily.</li>
      <li>When it rains, everyone outside without an umbrella gets wet.</li>
      </ol>
      </blockquote>
      <blockquote>
      <p>[therefore] You should take an umbrella.</p>
      </blockquote>
      <p>If premise (1) is false — if it is sunny outside — then the argument fails. It does not establish that you should take an umbrella. Or suppose that premise (2) is false. Maybe not everyone without an umbrella gets wet. (Maybe some people are able to stay under the awnings.) In this case, too, the argument does not establish its conclusion. Arguments only succeed when all their premises are true.</p>
      <p>Suppose both premises <em>are</em> true. It really is raining heavily, and we’re talking about an area where there’s no protection from the rain other than umbrellas, so that anyone outside without an umbrella will get wet when it rains. Now does the argument show you that you should take an umbrella? It certainly seems to lend some support in that direction. But notice that it’s still not <em>conclusive</em>. There are still <em>possible</em> ways the conclusion might be false. For example, suppose you like getting wet. Then, even if it is raining heavily, and even if everyone who goes outside without an umbrella when it rains gets wet, maybe you have no reason to take the umbrella.</p>
      <p>A good argument — or at least, an argument that is good in one particularly interesting way — <em>compels</em> its conclusion.</p>
      <p>So it seems that there are two ways an argument could be weak. First, one or more of the premises might be false. An argument gives you a reason to believe its conclusion only if you believe its premises. Second, the premises might fail to support the conclusion, or fail to support it sufficiently strongly. Even if the premises were true, the form of the argument might be weak. The example we just considered is weak in both ways.</p>
      <p>Once again, we are working with a particular kind of idealization regarding arguments and what makes them good. Consider another example:</p>
      <pre><code>You are reading this book.
      This is a logic book.
      [therefore] You are a logic student.</code></pre>
      <p>In a straightforward and ordinary sense, this is not a terrible argument. The premises are true. And they do offer some support for the conclusion. Most people who read this book are logic students. Still, it is <em>possible</em> for someone besides a logic student to read this book. If the deans carefully read this book in order to find out whether I’m criticizing the UBC administration, that wouldn’t make them logic students. So the premises of this argument, even though they are true, do not guarantee the truth of the conclusion.</p>
      <p>By contrast, the sample argument about snow <em>is</em> valid. There’s just no possible way for all three of its premises to be true without it snowing.</p>
      <p>In logic, we are interested in arguments whose premises <em>guarantee</em> their conclusions. We call such arguments ‘deductively valid’ or just ‘valid.’ Even though we might count the rain argument, or the logic book argument, as a good argument in some sense, they are not valid; that is, they are ‘invalid.’ One important task of logic is to sort valid arguments from invalid arguments.</p>
      <h2 id="validity"><strong>1.4 Validity</strong></h2>
      <p>An argument is deductively <strong>Valid</strong> if and only if it is impossible for all the premises to be true while the conclusion is false. (We’ll say a bit more about just what we mean by ‘impossible’ in §1.5 [link to sec 1.5] below.)</p>
      <p>That’s our official <em>definition</em> of validity. Once again (get used to this pattern), our formal definition is related to, but not quite the same as, the ordinary colloquial notion with the same name. In ordinary English, to say something is ‘valid’ means, somewhat vaguely, that it is good. (Think of a ‘valid point’ or a ‘valid perspective’.) In logic, a valid argument is one that has this very specific feature: it’s impossible for the premises to be true if the conclusion is false. (Side note: this is a good terminological distinction to keep in mind when writing essays in philosophy courses. Philosophy professors tend to wince and get annoyed when students use the word ‘valid’ in its imprecise sense. You can help stay on their good sides by only saying something is ‘valid’ when you mean that it is an argument whose premises are inconsistent with the falsity of its conclusion.)</p>
      <p>Notice that validity does <em>not</em> require that the premises be true. Consider this example:</p>
      <pre><code>1. Oranges are either fruits or musical instruments.
      2. Oranges are not fruits.
      [therefore] Oranges are musical instruments.</code></pre>
      <p>This is a valid argument. It is impossible for the premises to be true if the conclusion is false. Since it has a false premise — premise (2) — it does not actually establish its conclusion, but it does have a <em>valid logical form</em>. <em>If</em> both premises were true, <em>then</em> the conclusion would necessarily be true.</p>
      <p>Since this is a valid argument that is, in some important sense, a bad argument, this shows that validity isn’t the only feature we care about in arguments. An argument is <strong>sound</strong> if and only if it is valid and all of its premises are true. For example, this variant argument on the above argument is sound:</p>
      <pre><code>1. Oranges are either fruits or musical instruments.
      2. Oranges are not musical instruments.
      [therefore] Oranges are fruits.</code></pre>
      <p>For reasons that will emerge, logic tends to focus primarily on validity, rather than soundness.</p>
      <p>We’ve seen that a valid argument does not need to have true premises or a true conclusion. Conversely, having true premises and a true conclusion is also not enough to make an argument valid. Consider this example:</p>
      <pre><code>Donald Trump is a U.S. citizen.
      Justin Trudeau is a Canadian citizen.
      UBC is the largest employer in Vancouver.</code></pre>
      <p>The premises and conclusion of this argument are, as a matter of fact, all true. Nevertheless, this is quite a poor argument. This is related to the fact that the premises have nothing to do with the conclusion. More precisely, the definition of validity is not satisfied: it is possible for the premises to be true while the conclusion is false. Although the conclusion is <em>actually</em> true, it is <em>possible</em> for the premises of this argument to be true while the conclusion is false. We may imagine, for example, that Lululemon hired an additional 100,000 employees in Vancouver, while UBC remained the same size, and without any world leaders changing their citizenship statuses. In such a possible scenario, the premises would be true, while the conclusion is false.</p>
      <p>The important thing to remember is that validity is not about the actual truth or falsity of the sentences in the argument. Instead, it is about the form of the argument: The truth of the premises is incompatible with the falsity of the conclusion.</p>
      <p>Here are some more valid arguments. Can you see why each is valid?</p>
      <pre><code>1. Socrates is a man.
      2. All men are carrots.
      Socrates is a carrot.</code></pre>
      <p><br/></p>
      <pre><code>1. Abe Lincoln was either born in Illinois or he was once president.
      2. Abe Lincoln was never president.
      [therefore] Abe Lincoln was born in Illinois.</code></pre>
      <p><br/></p>
      <pre><code>1. Justin Trudeau is either from France or from Luxemborg.
      2. Justin Trudeau is not from Luxemborg.
      [therefore] Justin Trudeau is from France.</code></pre>
      <p><br/></p>
      <pre><code>1.If the world were to end today, then I would not need to get up tomorrow morning.
      2. I will need to get up tomorrow morning.
      [therefore] The world will not end today.</code></pre>
      <h2 id="impossibility"><strong>1.5 Impossibility</strong></h2>
      <p>The definition of validity centrally invokes the notion of impossibility. What it means for a sentence to be <em>impossible</em> is that there is no possible way for it to be true. Impossible sentences don’t just <em>happen</em> to be false; they <em>must</em> be false. Consider the sentence, ‘The Whitecaps lost their last game.’ As it happens, at the time I’m writing, that’s false. They actually won. But it’s not impossible; they might have lost, if a few things had gone differently. So that sentence is false, but not impossible.</p>
      <p>By contrast, blatant contradictions like ‘the Whitecaps won the game and the Whitecaps lost the game’ <em>are</em> impossible. This sentence doesn’t just <em>happen</em> to be false. It couldn’t <em>possibly</em> be true.</p>
      <p>Even falsehoods that are really obviously false, and for which it’s hard to imagine how they could be true, might be <em>possible</em>. It’s not <em>impossible</em> that pigs could fly. Someone might invent powerful wings for them. When we’re interested in impossible sentences in logic, we really mean <em>impossible</em>. The best examples are contradictions.</p>
      <p>So to apply the definition of validity, we consider whether there is any possibility, no matter how far-fetched, where the premises are true and the conclusion is false.</p>
      <h2 id="other-logical-notions"><strong>1.6 Other logical notions</strong></h2>
      <p>Here are a few more relevant terms we’ll be working with.</p>
      <h3 id="logical-truth"><strong>1.6.1 Logical truth</strong></h3>
      <p>In considering arguments formally, we care about what would be true <em>if</em> the premises were true. Generally, we are not concerned with the actual truth value of any particular sentences — whether they are <em>actually</em> true or false. (As indicated above, we will be more interested in validity than in soundness.) Yet there are some sentences that must be true, just as a matter of logic.</p>
      <p>Compare these sentences:</p>
      <pre><code>1. It is raining.
      2. Either it is hot outside, or it is not hot outside.
      3. There is an earthquake happening here right now and there are never earthquakes here.</code></pre>
      <p>Sentence 1 could be true or it could be false. (As I’m typing these words on a sunny Vancouver summer day, it is false.) Sentences that could be true, or could be false, are called <em>contingent</em> sentences.</p>
      <p>Sentence 2 is different. Even though I don’t know what the weather is like as you’re reading this book, I still know that it’s true. Sentence 2 <em>must</em> be true. This sentence is <em>logically true</em>; no matter how the weather or anything else happens to be, this sentence has to be true. We call a sentence like this a <strong>logical truth</strong> or a <strong>tautology</strong>.</p>
      <p>You do not need to check the weather to know about sentence 3, either. It must be false, simply as a matter of logic. There could be an earthquake now, but if so, it couldn’t be the case that there are never earthquakes here. Or there might never be any earthquakes, but if so, there couldn’t be one now. The third sentence is <strong>logically false</strong>; it is false regardless of what the world is like. A logically false sentence is called a <strong>contradiction</strong>.</p>
      <p>I said above that a contingent sentence could be true and it also could be false. We can also define contingency in terms of tautologies and contradictions thus: a <strong>contingent sentence</strong> is a sentence that is neither a tautology nor a contradiction.</p>
      <h3 id="logical-equivalence"><strong>1.6.2 Logical equivalence</strong></h3>
      <p>We can also ask about the logical relations <em>between</em> two sentences. For example:</p>
      <pre><code>Sunil went to the store after he washed the dishes.
      Sunil washed the dishes before he went to the store.</code></pre>
      <p>These two sentences are both contingent. (Do you see why?) Yet they must have the same truth-value. If either of the sentences is true, then they both are; if either of the sentences is false, then they both are. When two sentences necessarily have the same truth value, we say that they are <strong>logically equivalent</strong>.</p>
      <p>Notice that both of these arguments are valid:</p>
      <pre><code>Sunil went to the store after he washed the dishes.
      [therefore] Sunil washed the dishes before he went to the store.</code></pre>
      <p><br/></p>
      <pre><code>Sunil washed the dishes before he went to the store.
      [therefore] Sunil went to the store after he washed the dishes.</code></pre>
      <p>In general, if two sentences are equivalent, then an argument with either one as a premise, and the other as the conclusion, will be valid.</p>
      <h3 id="consistency"><strong>1.6.3 Consistency</strong></h3>
      <p>Consider these two sentences:</p>
      <blockquote>
      <p><strong>B1</strong> My only brother is taller than I am.</p>
      </blockquote>
      <blockquote>
      <p><strong>B2</strong> My only brother is shorter than I am.</p>
      </blockquote>
      <p>Logic alone cannot tell us which, if either, of these sentences is true. Yet we can say that <em>if</em> the first sentence (B1) is true, <em>then</em> the second sentence (B2) must be false. And if B2 is true, then B1 must be false. It cannot be the case that both of these sentences are true.</p>
      <p>If a set of sentences could not all be true at the same time, like B1–B2, they are said to be <strong>inconsistent</strong>. Otherwise, they are <strong>consistent</strong>.</p>
      <p>We can ask about the consistency of any number of sentences. For example, consider the following list of sentences:</p>
      <blockquote>
      <p><strong>G1</strong> There are at least four giraffes at the wild animal park.</p>
      </blockquote>
      <blockquote>
      <p><strong>G2</strong> There are exactly seven gorillas at the wild animal park.</p>
      </blockquote>
      <blockquote>
      <p><strong>G3</strong> There are not more than two Martians at the wild animal park.</p>
      </blockquote>
      <blockquote>
      <p><strong>G4</strong> Every giraffe at the wild animal park is a Martian.</p>
      </blockquote>
      <p>G1 and G4 together imply that there are at least four Martian giraffes at the park. This conflicts with G3, which implies that there are no more than two Martian giraffes there. So the set of sentences G1–G4 is inconsistent. (Notice that in this example the inconsistency has nothing at all to do with G2. G2 just happens to be part of an inconsistent set.)</p>
      <h2 id="formal-languages"><strong>1.7 Formal languages</strong></h2>
      <p>So far, we have been working with arguments expressed in English. But there are some general argumentative structures that transcend English or any other particular natural language. Consider, for example, the following simple argument:</p>
      <pre><code>Vancouver is in Canada.
      Moscow is in Russia.
      [therefore] Vancouver is in Canada and Moscow is in Russia.</code></pre>
      <p>Hopefully by now it is obvious to you that this argument is valid. (Not just that — it is even sound.) That argument has something important in common with this one:</p>
      <pre><code>Vancouver is on Mars.
      Moscow is on Venus.
      [therefore] Vancouver is on Mars and Moscow is on Venus.</code></pre>
      <p>Although this one has false premises, and so can’t be sound, it is also valid. It is impossible for the premises to be true if the conclusion is false. Not only that — it seems that the argument is valid in, in a sense to be articulated, <em>exactly the same way</em>. The validity of the first argument is very similar to that of the second. Even though they are expressed by different strings of English sentences, it is useful to develop a language in which they are, in an important sense, the same kind of argument. Over the course of this textbook, we’ll be developing and working with such a language. We’ll begin with a simple version of our logical language, called SL, for <em>sentential logic</em>. Later on, we’ll develop a more complicated logical language, QL, for <em>quantified logic</em>. Both languages are <em>formal</em> in the sense that there are precise rules that govern how we should evaluate sentences within them.</p>
      <p>English is a natural language, not a formal one. Its rules are vague and messy, and constantly changing. We will spend some time translating between English and our formal languages, but the translations will not always be precise. There is a tension between wanting to capture as much of the structure of English as possible and wanting a simple formal language with tractable rules — simpler formal languages will approximate natural languages less closely. There is no perfect formal language. Some will do a better job than others in translating particular English-language arguments.</p>
      <p>In this book, we make the assumption that <em>true</em> and <em>false</em> are the only possible truth-values. Logical languages that make this assumption are called <em>bivalent</em>, which means <em>two-valued</em>. SL and QL are both bivalent, but some philosophers have emphasized limits to the power of bivalent logic. Some logics, beyond the scope of this book, allow for sentences that are neither true nor false. Others allow for sentences that are both true <em>and</em> false. Our logical system, which is often called <em>classical logic</em>, will give every sentence exactly one truth value: either true or false.</p>
      <h2 id="summary-of-logical-notions"><strong>Summary of logical notions</strong></h2>
      <ul>
      <li><p>An <strong>argument</strong> is a structured set of sentences, with <em>premises</em> intended to offer support for a <em>conclusion</em>.</p></li>
      <li><p>A <strong>sentence</strong>, in our logical terminology, is a sentence that expresses a proposition, and can be either true or false.</p></li>
      <li><p>An argument is (deductively) <strong>valid</strong> if it is impossible for the premises to be true and the conclusion false; it is <strong>invalid</strong> otherwise.</p></li>
      <li><p>A <strong>tautology</strong> is a sentence that must be true, as a matter of logic.</p></li>
      <li><p>A <strong>contradiction</strong> is a sentence that must be false, as a matter of logic.</p></li>
      <li><p>A <strong>contingent sentence</strong> is neither a tautology nor a contradiction.</p></li>
      <li><p>Two sentences are <strong>logically equivalent</strong> if they necessarily have the same truth value.</p></li>
      <li><p>A set of sentences is <strong>consistent</strong> if it is logically possible for all the members of the set to be true at the same time; it is <strong>inconsistent</strong> otherwise.</p></li>
      </ul>
      <h2 id="practice-exercises"><strong>Practice Exercises</strong></h2>
      <p>At the end of each chapter, you will find a series of practice problems that review and explore the material covered in the chapter. There is no substitute for actually working through some problems, because logic is more about a way of thinking than it is about memorizing facts. The answers to some of the problems are provided at the end of the book in appendix B; the problems that are solved in the appendix are marked with a [star].</p>
      <p>[star] <strong>Part A</strong> Which of the following are ‘sentences’ in the logical sense?</p>
      <pre><code>1. England is smaller than China.
      2. Greenland is south of Jerusalem.
      3. Is New Jersey east of Wisconsin?
      4. The atomic number of helium is 2.
      5. The atomic number of helium is $\pi$.
      6. I hate overcooked noodles.
      7. Blech! Overcooked noodles!
      8. Overcooked noodles are disgusting.
      9. Take your time.
      10. This is the last question.</code></pre>
      <p><strong>Part B</strong> For each of the following: Is it a tautology, a contradiction, or a contingent sentence?</p>
      <pre><code>1. Caesar crossed the Rubicon.
      2. Someone once crossed the Rubicon.
      3. No one has ever crossed the Rubicon.
      4. If Caesar crossed the Rubicon, then someone has.
      5. Even though Caesar crossed the Rubicon, no one has ever crossed the Rubicon.
      6. If anyone has ever crossed the Rubicon, it was Caesar.</code></pre>
      <p>[star] <strong>Part C</strong> Look back at the sentences G1–G4 on p. 19, and consider each of the following sets of sentences. Which are consistent? Which are inconsistent?</p>
      <pre><code>1. G2, G3, and G4
      2. G1, G3, and G4
      3. G1, G2, and G4
      4. G1, G2, and G3</code></pre>
      <p>[star] <strong>Part D</strong> Which of the following is possible? If it is possible, give an example. If it is not possible, explain why.</p>
      <pre><code>1. A valid argument that has one false premise and one true premise
      2. A valid argument that has a false conclusion
      3. A valid argument, the conclusion of which is a contradiction
      4. An invalid argument, the conclusion of which is a tautology
      5. A tautology that is contingent
      6. Two logically equivalent sentences, both of which are tautologies
      7. Two logically equivalent sentences, one of which is a tautology and one of which is contingent
      8. Two logically equivalent sentences that together are an inconsistent set
      9. A consistent set of sentences that contains a contradiction
      10. An inconsistent set of sentences that contains a tautology</code></pre>
      <p><strong>Part E</strong> Is this argument valid? Why or why not? (Hint: here and elsewhere in logic, read the definitions of our formal terms literally.)</p>
      <pre><code>1. PHIL 220 is a course with a final exam.
      2. No courses ever have final exams.
      [therefore] Everyone is going to get an A+ in PHIL 220.</code></pre>
    </div>
  );
}

export default Chapter1