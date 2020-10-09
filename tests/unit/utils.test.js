const { toSlug, toArray } = require("@/lib/utils");

describe("lib", () => {
  describe("utils", () => {
    describe("toSlug()", () => {
      test("returns kebab style slug", () => {
        const text = "This is not a slug, but you can use toSlug() function.";
        expect(toSlug(text)).toBe(
          "this-is-not-a-slug-but-you-can-use-to-slug-function",
        );
      });
    });
    describe("toArray()", () => {
      test("returns an array of values from a k/v object", () => {
        const input = {
          bool: true,
          string: "test",
          number: 123,
          array: ["one", "two"],
          child: { key: "value" },
        };
        const expected = [true, "test", 123, ["one", "two"], { key: "value" }];
        expect(toArray(input)).toEqual(expect.arrayContaining(expected));
      });
      test("returns undefined if not an object", () => {
        const input = "test";
        expect(toArray(input)).toBeUndefined();
      });
    });
  });
});
