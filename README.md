## Getting Started

First, install libraries (Node 12.11.0):

```bash
yarn
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Image Error Approach

First, if the image is undefined, with no timeout error, I evaluate `typeof response.headers['content-type'] === 'undefined'` in `src/redux/api.ts`, then I send undefined in the image object and I can catch the error on the component.

Then, if the input return a timeout, it automatically dispatch the error action.

If there is an error, it doesn't save the record and I added a Try Again button.

## Download a record

All the records are stored on `localStorage` (not the best solution, with more time I would use Redis or Firebase to store the values.)

The image is stored in base 64.

## What I would do if I had more time?

  - Testing, testing, testing
  - Improve Polling with redux
  - Fix Flash of Unstyled Content
  - Fix blink on every polling
  - Add immutable library
  - Fix some types
  - Add default props
  - Improve documentation

## Workflow

The branching model used is gitflow, this helps a lot with collaboration and scaling the development team.

### master

deployments to production

### develop

Developtment branch.

### feature/initial_setup

Adding tsconfig, precommiter and material ui.

### feature/layout

Adding the base responsive layout.

### feature/redux

Adding all the redux functionality

### feature/documentation

Adding documentation to the code

## Styling

Used `eslint`,it is going to tell you if you’ve imported something and not used it, if your function could be short-handed, and loads of other little gotchas that you can fully configure.

Used `prettier`, it is an opinionated code formatter, this will assure that the code styling is the same.

## Libraries Used

These are ones of the major libraries I used to accomplish this test.

### Next.js

Use to use SSR (server side rendering features), this can improve the SEO.

### Material UI

Theming

### Redux/Redux-Saga 

 State management and midleware for side effects
### Axios 

 Promise based HTTP client

 ### husky 

 precommit, ensure same slyting and no javascript errors before commit
### eslint 

 linter tool to find and fix problems in javascript code.
### prettier 

 to share the same code styling

## Structure overview

```
├── README.md
├── src
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   ├── components
│   │   └── Footer
│   │   │   └── index.tsx
│   │   └── ImageViewer
│   │   │   └── index.tsx
│   │   └── Layout
│   │   │   └── index.tsx
│   │   └── NavBar
│   │   │   └── index.tsx
│   │   └── TableValues
│   │   │   └── index.tsx
│   │   └── Values
│   │   │   └── index.tsx
│   │   └── AppContext.tsx
│   │   └── MuiTheme.tsx
│   │   └── index.tsx
│   ├── redux
│   │   └── home
│   │   │   └── actions.ts
│   │   │   └── api.ts
│   │   │   └── reducers.ts
│   │   │   └── representations.ts
│   │   │   └── sagas.ts
│   │   │   └── types.ts
│   │   └── store.ts
│   │   └── rootSaga.ts
│   │   └── api.ts
│   ├── constants
│   │   └── index.ts
└── yarn.lock
├── package.json
├── .eslintrc.json
├── .prettierrc
├── jsconfig.json
```
