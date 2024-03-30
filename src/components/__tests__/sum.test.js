import { sum } from "../sum";

test("this sum function will calculate sum of two given numbers", () => {
  const res = sum(3, 4);
  //assertion
  expect(res).toBe(7);
});
