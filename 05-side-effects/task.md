# Assignment: Side Effects with React useEffect

**Welcome to your React Foundation challenge!** It is time to prove you can safely interact with the outside world without freezing the browser or causing a memory leak.

## Part 1: The Effect Quiz

*Answer these questions briefly in your own words.*

1. **The Timing:** Why does React wait until *after* the DOM is painted to the screen to execute the code inside a `useEffect`?
> useEffect handles the side effects that work like fetching data, local storage management, etc., which are not related to the UI rendering part. If the React engine starts executing `useEffect` before the UI paint and doesn't wait for the UI to be painted, it would cause performance issues like a frozen UI. Because we know JavaScript is single-threaded, the execution of the `useEffect` code would block the main thread. Therefore, the UI would get frozen.

2. **The Infinite Loop:** If you have `const [count, setCount] = useState(0)` and you write `useEffect(() => { setCount(count + 1); }, [count])`, what happens and why?
> This code will trigger an infinite loop and crash teh application. When the component mounts,  `count` is `0` and the effects run setting `count` to `1`. Because the count is listed in the dependency array `[count]` this state change forces the component to re-render and immediately `triggers` the useEffect again. The effect then sets count to 2, which triggers another render and another effect execution, repeating the cycle infinitely.

3. **Reference Equality:** Why is putting an array like `[1, 2, 3]` directly into a dependency array dangerous, and how does it relate to JavaScript memory references?
> Putting an array `[1, 2, 3]` directly is very dangerous; It causes infinite re-renders. JavaScript compares primitive values like strings, numbers, and booleans by their value. But when it comes to objects and arrays, JavaScript compares them by their reference memory address. But in every render, the array `[1, 2, 3]` in the dependency array will be created from scratch, and a new memory reference will be created for that array. So React will not find the exact memory reference to compare the changes of the array `[1, 2, 3]`. If this `useEffect` happens to update state, the app will fall into an infinite loop.

## Part 2: The Stopwatch Challenge

Create a new route (`/effect-challenge`) and build a functional Stopwatch.

### Step 1: The State

- Create state for `seconds` (number).
- Create state for `isRunning` (boolean).

### Step 2: The Side Effect (The Timer)

- Write a `useEffect` that checks if `isRunning` is true.
- If true, use `setInterval` to increase the `seconds` state by 1 every 1000 milliseconds.
- *Crucial Architect Step:* You MUST return a cleanup function that calls `clearInterval`. If you forget this, your timer will go insane.

### Step 3: The UI

- Render the `seconds` on the screen.
- Add a "Start" button that sets `isRunning` to true.
- Add a "Stop" button that sets `isRunning` to false.
- Add a "Reset" button that sets `isRunning` to false and resets `seconds` to 0.

## 🚀 How to Submit

Head over to the tapaScript Discord server and use the template:

**[Copy & Paste this into Discord]**

```bash
**Effect Assignment Submission**

**Part 1: Quiz Answers**
1. [Your answer on Timing]
2. [Your answer on the Infinite Loop]
3. [Your answer on Reference Equality]

**Part 2: The Stopwatch Challenge**
🔗 GitHub Repo Link: [Link to your repo showing your new files]
📸 Screenshot/GIF: [Attach a short GIF or screenshot showing your stopwatch counting up flawlessly!]
```