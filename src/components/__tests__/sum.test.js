import sum from "../sum";
//description: This test checks if the sum function correctly adds two numbers.
test("sum function should calculate the sum of two numbers ", () => {
  const result = sum(2, 5); // test

  // assert that the result is 5
  expect(result).toBe(7); // assertion
});
