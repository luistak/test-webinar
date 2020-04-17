<h1 align="center">
  JavaScript Testing - React Pocket edition
</h1>

<p align="center" style="font-size: 1rem;">
  Learn how to test React Apps from fundamentals to React Testing Library
</p>

<hr />

This Webinar it's inspired in the Testing Javascript course material:
- [Fundamentals](https://github.com/kentcdodds/js-testing-fundamentals)
- [React Testing library](https://github.com/kentcdodds/react-testing-library-course)

## Fundamentals

- [`simple.js`](packages/fundamentals/src/tests/1-simple.js) - Simple automated test

> To run this tests enter the `packages/fundamentals` and run `yarn test:simple`

- [`assertion.js`](packages/fundamentals/src/tests/2-assertion.js) - Added a custom assertion

> To run this tests enter the `packages/fundamentals` and run `yarn test:assertion`

- [`utilities.js`](packages/fundamentals/src/tests/3-utilities.js) - Created test utilities

> To run this tests enter the `packages/fundamentals` and run `yarn test:utilities`

- [`jest.js`](packages/fundamentals/src/tests/4-jest.test.js) - Simple jest usage

> To run this tests enter the `packages/fundamentals` and run `yarn test:jest`

The files are intended to test the `math` module.

## React

- [`react-dom.test.js`](packages/sample-app/src/app/__tests__/01-react-dom.test.js) - Testing React apps with ReactDOM
- [`matchers.test.js`](packages/sample-app/src/app/__tests__/02-matchers.test.js) - Using custom jest matchers
- [`dom-tl.test.js`](packages/sample-app/src/app/__tests__/03-dom-tl.test.js) - Added Dom Testing library
- [`render.test.js`](packages/sample-app/src/app/__tests__/04-render.test.js) - Created render utility
- [`react-tl.test.js`](packages/sample-app/src/app/__tests__/05-react-tl.test.js) - Initial react testing library usage
- [`unit.test.js`](packages/sample-app/src/quantity/__tests__/01-unit.test.js) - Initial Unit test
- [`fire-event.test.js`](packages/sample-app/src/quantity/__tests__/02-fire-event.test.js) - Dispatching events on nodes
- [`user-event.test.js`](packages/sample-app/src/quantity/__tests__/03-user-event.test.js) - Added user simulations into tests
- [`prop-changes.test.js`](packages/sample-app/src/quantity/__tests__/04-prop-changes.test.js) - Rerendering components changing properties
- [`init-mock.test.js`](packages/sample-app/src/quantity/__tests__/05-init-mock.test.js) - Added initial jest mock

> To run those tests enter the `packages/sample-app` and run `yarn test`

- [`redux.test.js`](packages/redux-request/src/redux.test.js) - Testing async redux flows

> To run those tests enter the `packages/redux-request` and run `yarn test`

- [`integration.test.js`](packages/integrations/src/__tests__/integration.test.js) - Pocket eCommerce integration test

> To run those tests enter the `packages/integrations` and run `yarn test`

## Contributors

- [@Andrewmat](https://github.com/Andrewmat)
- [@luis.takahashi](https://github.com/luistak)
