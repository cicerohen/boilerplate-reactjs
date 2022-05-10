# ReactJS boilerplate

This is a simple app bootstrapped with [CRA](https://github.com/facebook/create-react-app) and that consumes the Marvel's API.

[Click here to see more boilerplates](https://github.com/cicerohen/boilerplates)

## Tooling

- [ReactJS](https://reactjs.org/)
- [TailwindCSS]()
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [TypeScript](https://www.typescriptlang.org/)

## Get Started

### Marvel Developer Portal

Go to https://developer.marvel.com to create your account and
**activate it** with the link sent to your email.

Create a .env.local file on the **root folder** of the project and put your API keys into it (https://developer.marvel.com/account)

> .env.local

```
REACT_APP_MARVEL_API_BASE=https://gateway.marvel.com:443/v1
REACT_APP_MARVEL_PUBLIC_KEY = PUBLIC_KEY
REACT_APP_MARVEL_PRIVATE_KEY= PRIVATE_KEY
```

### Development

> Install the dependencies

```
yarn
```

> Start a local server

```
yarn start
```

### Tests

```
yarn test
```
