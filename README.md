# React Router Dom: Unexpected behavior with trailing slashes in routes

This repository demonstrates a bug in React Router Dom v6 where navigating to a route with a trailing slash does not redirect to the correct path without the trailing slash.  This can cause unexpected behavior in your application.

## Bug Description

When navigating to a route such as `/about/`, the application does not automatically redirect to `/about`.  This means that a user typing `/about/` into the address bar or following a link to `/about/` ends up on a technically correct route, but an undesired state in the application.

## Solution

The solution involves using the `useLocation` hook to check for the trailing slash and redirect accordingly.  This ensures that any trailing slashes are removed, leading to consistent behavior regardless of how the user navigates to the route.  Refer to `AppSolution.js` for implementation details.