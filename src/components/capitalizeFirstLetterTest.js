const assert = require("assert");

function capitalizeFirst(input) {
  let stringEntrySplit = input.split(" ");
  for (let i = 0; i < stringEntrySplit.length; i++) {
    stringEntrySplit[i] =
      stringEntrySplit[i].charAt(0).toUpperCase() +
      stringEntrySplit[i].substring(1);
  }
  return stringEntrySplit.join(" ");
}

assert.strictEqual(typeof capitalizeFirst, "function");

assert.strictEqual(capitalizeFirst.length, 1);

assert.strictEqual(capitalizeFirst("javaScript"), "JavaScript");

assert.strictEqual(capitalizeFirst("z"), "Z");

assert.strictEqual(capitalizeFirst(""), "");
