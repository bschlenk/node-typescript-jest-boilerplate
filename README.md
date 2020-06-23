# node-typescript-jest-boilerplate

Boilerplate for a node server or library written in typescript, using jest as
the test runner.

## Usage

Clone the boilerplate as a new project:

```bash
git clone https://github.com/bschlenk/node-typescript-jest-boilerplate.git <project>
```

Update [package.json](package.json) as you see fit.

## Modifications

If this is for a library only, then chances are you don't need nodemon. You can
make the following changes to remove it:

- Delete `nodemon.json`
- Remove `watch` from `package.json` scripts
- Remove `nodemon` from `package.json` devDependencies
