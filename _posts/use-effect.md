---
title: "React useEffect Hook for Beginners"
excerpt: "Learn everything about the useEffect hook in React - from basic usage to dependency arrays and cleanup functions. Understand how to handle side effects in functional components effectively."
coverImage: "/assets/blog/use-effect/cover.jpg"
date: "2025-08-14T10:30:00.000Z"
author:
  name: Nick Magidson
  picture: "/assets/blog/authors/nick.jpg"
ogImage:
  url: "/assets/blog/cover.jpg"
---




## Introduction

Today we are going to talk about a the `useEffect` hook. One of the most fundamental hooks in React.

We'll dive into:
- What it is
- How it works  
- What the dependency array is
- The importance of cleanup


## What is it?
The `useEffect` hook is a function in React that lets you create side effects in your React components.

Side effects are actions that affect other components outside of the scope of the current component that the hook is called in.

Side effects include: 
- Fetching data
- Updating the DOM
- Subscribing to events
- Setting timers

It looks something like this:
```javascript
useEffect(() => {
  console.log("Component mounted!");
}, []);
```
You probably noticed that empty array at the end. We'll get to that later...



## How it works
When the `useEffect` hook is called, it tells React that your component needs to do something.

React will remember the function you passed and call it later after it updates the DOM.

Remember those lifecycle methods?
- `componentDidMount`
- `componentDidUpdate` 
- `componentWillUnmount`

In a way `useEffect` is like a combo of these.

I bring you a classic example:
```javascript
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0); //initial count

  // useEffect runs after every render by default
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```




## The Dependency Array

By default, `useEffect` runs after **every render**, but you can control this behavior with the **dependency array**. This is passed as a second argument in your hook!

It’s an array of values that React watches. If any of them change after a render, the effect will run again.

```javascript
// This effect runs only when count changes
useEffect(() => {
  console.log('Count has changed! 🔄');
}, [count]);
```

Here are three scenarios:

- **No dependency array >>** code inside `useEffect` runs every time your component re-renders.

- **Empty dependency array >>** code inside your `useEffect` only runs once when your component first mounts.

- **Not-empty dependency array >>** code inside your `useEffect` runs every time any variables you put inside the dependency array change.

## Cleanup in useEffect

### What is Cleanup?
Cleanup is essentially stopping or getting rid of any action started by the `useEffect` hook that may affect other parts of your app.

Especially when working with:
- Event listeners
- WebSocket connections
- Intervals or timeouts

React will let you return a **cleanup function** from inside `useEffect`.

```javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log('tick');
  }, 1000);

  return () => {
    clearInterval(timer); // ✅ Cleanup!
  };
}, []);
```

Without cleanup, you'd be creating a new interval on every re-render. This will stack up performance issues!

### Cleanup is Important!
Cleanup in the `useEffect` hook is important because is helps prevent things like memory leaks, duplicate effects, and unintended behavior in your app.

When should you clean up?
- **When a component is removed** - Use cleanup to stop timers, cancel subscriptions, or remove event listeners so they don't keep running after the component is gone. This prevents memory leaks.

- **Before repeating an action** - If your effect runs again (due to a dependency change), cleanup ensures you reset things like intervals or listeners before starting new ones. This avoids stacking duplicate behavior.

## Conclusion
That about sums it up. Here is a short recap.

- `useEffect` runs **after the DOM updates**, ideal for side effects.
- Use the **dependency array** to control when it runs.
- Return a **cleanup function** to avoid leaks or unexpected behavior.
- It's the functional equivalent of:
    - `componentDidMount`
    - `componentDidUpdate`
    - `componentWillUnmount`