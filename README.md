# Introduction

This project provides scaffolding for a basic 'Hello world' web application. Solutions can either be written in Typescript or Javascript.

When finished, please commit your code and push it to a remote git repository your interviewers have access to.

## Installation
- `npm i`
- `npm run dev`

The `dev` script will compile your code and serve it from a local instance of *webpack-dev-server*

## Testing
[Jest](https://jestjs.io/docs/getting-started) is pre-installed.
- `npm test`

## Project structure

| Folder      | Description                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------|
| `src`       | Contains the entry path for webpack. This is where you should write your implementation.                                            |
| `config`    | Contains configuration files for libraries used. You shouldn't need to change any config but you can if you'd like to.              |
| `dist`      | Contains compiled JS files.                                                                                                         |
| `public`    | Contains a HTML file which is picked up by `webpack-dev-server`                                                                     |
