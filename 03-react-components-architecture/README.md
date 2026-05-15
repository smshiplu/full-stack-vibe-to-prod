# 03  - React Component Architecture & JSX

## **🎯 Goal of This Lesson**

- The Component Driven Mindset
- What is Component and What is JSX?
- Building  Components
- Composing Components
- The "children" Prop: Advanced Composition
- Common Mistakes and Architect Secrets
- Task Assignment
- What’s in the Next Episode(Episode 04)?

## **👩‍💻 🧑‍💻 Assignment Tasks**

Check out the [Task File](./task.md)

## Part 1: The Blueprint Quiz
- JSX Under the Hood: Why can't the browser directly read JSX, and what does Vite (or Babel) convert your `<h1 className="title">` tag into?
> Answer: JSX is JavaScript XML, where browsers are made to read and redder HTML, CSS JavaScript only as long as the compilers of vite or bebel convert JSX `<h1 className="title">` into a valid JavaScript.

<br/>

- Capital Letters: What happens if you define a custom component as function myButton() { ... } and try to render it as `<myButton />` Why?
> When we write a React component in lowercase `myButton()`, React treats it as a standard HTML tag. JSX parser tells browser to create a HTML tag `<myButton />`. But there is no tag `<myButton />` exists among web components. So the code fails.

<br/>

- The 0 Bug: Explain why `{comments.length && <span>Comments</span>}` might render a stray 0 on the screen if there are no comments, and provide the correct way to write this condition.
> When there are no comments, `comments.length` evaluates to 0, which is a falsy value. However, in JavaScript, the expression `0 && <span>Comments</span>` will still evaluate to 0, and React will render it as a string "0" on the screen. To avoid this issue, we can use a ternary operator instead: `{comments.length > 0 ? <span>Comments</span> : null}`. This way, if there are no comments, it will render `null` instead of 0.


