/**
 * This is a very
 * very
 * long comment
 *
 * It breaks error locations running the code
 *
 * Idk why
 *
 * Please can this be fixed?
 */
export function doThing() {
  let someVar; // undefined

  console.log("About to crash");

  for (const item of someVar) {
    console.log(item);
  }
}
