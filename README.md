# Jest bug demo

A solution for [an annoying thing with Jest](https://github.com/facebook/jest/issues/13993)

## To reproduce

1. Clone repository
2. Run `npm install`
3. Run `npm test`

## Expected results

The error is similar to the error produced when running `npm start`

```js

> start
> node src/main.js

About to crash
file:///home/migue/Source/Playground/undef_test/src/undef.js:16
  for (const item of someVar) {
                     ^

TypeError: someVar is not iterable
    at doThing (file:///home/migue/Source/Playground/undef_test/src/undef.js:16:22)
    at file:///home/migue/Source/Playground/undef_test/src/main.js:4:1
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)

Node.js v18.15.0
```

## Actual results

A misleading error is produced, pointing to an incorrect source location.

```js
> test
> jest

  console.log
    About to crash

      at log (src/undef.js:15:11)

 FAIL  src/undef.test.js
  ✕ Some test (14 ms)

  ● Some test

    TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))

       5 |  */
       6 |
    >  7 | import fs from 'fs';
         |                     ^
       8 | // Error looks like it originated from import, even though it clearly didn't
       9 | // This is very confusing, especially for novice users.
      10 |

      at _createForOfIteratorHelper (src/undef.js:7:21)
      at _createForOfIteratorHelper (src/undef.js:15:33)
      at Object.<anonymous> (src/undef.test.js:4:10)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.556 s, estimated 1 s
Ran all test suites.
```

## Solution

Configure Babel to target the current version of Node.

1. Delete `.babelrc`
2. Create a new `.babelrc.cjs` with the contents of [the file in this repo](./.babelrc.cjs)
