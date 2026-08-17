const {
  EventEmitter
} = require("events");
const forEmitOf = require("for-emit-of");

async function test() {
  const neverEmit = new EventEmitter();

  for await (const item of forEmitOf(neverEmit)) {
    console.log(`never will print ${item}`);
  }
}
test();
