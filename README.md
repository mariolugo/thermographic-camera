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

To run the tests:

```bash
yarn test
```

To run the test coverage

```bash
yarn test:coverage
```

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

## Styling

Used `eslint`,it is going to tell you if you’ve imported something and not used it, if your function could be short-handed, and loads of other little gotchas that you can fully configure.

Used `prettier`, it is an opinionated code formatter, this will assure that the code styling is the same.

## Libraries Used

These are ones of the major libraries I used to accomplish this test.

### Next.js

Use to use SSR (server side rendering features), this can improve the SEO.

### Material UI

Theming
