---
title: "Parallelizing Requests in JavaScript"
excerpt: "Learn how to improve performance by running multiple HTTP requests in parallel using Promise.all() and Promise.allSettled(). Understand when and how to parallelize independent asynchronous operations effectively."
coverImage: "/assets/blog/parallel/parallel.jpg"
date: "2025-11-03T10:30:00.000Z"
author:
  name: Nick Magidson
  picture: "/assets/blog/authors/nick.jpg"
ogImage:
  url: "/assets/blog/parallel/parallel.jpg"
---

## Intro

When building modern web applications, it's common to need data from multiple sources. For example, you might need user information, posts, and comments.

If you fetch these one at a time, each request waits for the previous one to finish. That can slow things down, especially if one request takes longer than the others.

A more efficient approach is to run requests in **parallel** using `Promise.all()`. This can improve performance and provide a smoother user experience.



## Let's use Promise.all()

`Promise.all()` is a method that accepts an iterable (usually an array) of promises and returns a single promise that resolves when all the input promises have resolved.

If any promise rejects, `Promise.all()` **immediately rejects** with the reason from the first promise that failed. This makes it powerful for parallelizing independent asynchronous operations, but also something to handle carefully.



### How it Works:

```javascript
const urls = [
  'https://api.example.com/users',
  'https://api.example.com/posts',
  'https://api.example.com/comments'
];

async function fetchAll() {
  try {
    const [users, posts, comments] = await Promise.all(
      urls.map(url => 
        fetch(url)
          .then(res => {
            if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
            return res.json();
          })
      )
    );

    console.log({ users, posts, comments });
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}
```

In this example, `fetchAll()` initiates all three fetch requests concurrently. While JavaScript is single-threaded, these requests can overlap in time as the browser handles the network operations. `Promise.all()` waits for all of them to resolve and then processes the responses.

This approach can significantly reduce the total time spent waiting for all requests to complete compared to handling them sequentially.

**Important**: This approach works best when your requests are independent of each other, meaning one request doesn't need the result of another to proceed. If your requests have dependencies (like needing a user ID from the first request to fetch that user's posts), you'll need to handle them sequentially or in stages.



## Handling Errors Gracefully

If any promise in `Promise.all()` rejects, the entire operation fails. To handle each result independently, you can use `Promise.allSettled()`:

```javascript
const results = await Promise.allSettled(
  urls.map(url => 
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
        return res.json();
      })
  )
);

results.forEach((result, index) => {
  if (result.status === 'fulfilled') {
    console.log(`Request ${index} succeeded:`, result.value);
  } else {
    console.warn(`Request ${index} failed:`, result.reason);
  }
});
```

Now you can see which requests succeeded and which failed, without stopping everything.

## Conclusion

- Use `Promise.all()` for **independent requests** that can run at the same time.
- Check for HTTP errors; `fetch` won't throw for things like 404.
- Use `Promise.allSettled()` if you need all results, regardless of failures.

Parallelizing requests with `Promise.all()` can make your web applications faster and more responsive. By understanding how it handles errors and when it's appropriate to use, you can write more efficient asynchronous code without introducing subtle bugs.
