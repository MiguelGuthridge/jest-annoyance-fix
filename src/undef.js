/**
 * This is a long comment
 *
 * It causes the error message to appear in a misleading place
 */

import fs from 'fs';
// Error looks like it originated from import, even though it clearly didn't
// This is very confusing, especially for novice users.


export function doThing() {
  let someVar; // undefined

  console.log("About to crash");

  for (const item of someVar) {
    console.log(item);
  }
}
