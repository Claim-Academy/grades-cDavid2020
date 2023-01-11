import { add2Nums } from "./index.js";
import { test, expect } from "vitest";

test("1 + 1 = 2", () => {
  expect(add2Nums(1, 1)).toBe(2);
});




// UNIT TESTING

import { it, expect } from "vitest";
import { increasePrices, numberifyPrice, stringifyPrice } from "index.js"; // what are the braces for? no braces its a DEFAULT EXPORT. {} means it has multiple Things

it("will increse the price by 10%") () => {});// 👈 here identify what you want to print to console. What is IT? a function mdn it. IT is a named import form 'vitest'
const originalPriceInput = "$50";
const percentIncrease = 0.1;
const expected = "$55.00" // 10 percent of 50

const actual = increasePrice(originalPriceInput, percentIncreaseInput);

expect(actual).toBe(expected);
});

it ("converts '49.99' to 49.99, () => {});

it ("converts 49.99 to $49.99", () => {});

// recording continutes

// Write a test to test the 'numerify function'


