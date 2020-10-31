import { plain } from "./index";

test("should return plain object", () => {
  const at = new Date();
  expect(plain({ name: "jame", at })).toEqual({
    name: "jame",
    at: at.toISOString(),
  });
});
