import { sayHello } from "./index";

describe("sayHello", () => {
  it("should return the correct name when one is given", () => {
    const actual = sayHello("John Doe");

    expect(actual).toEqual("Hello, John Doe");
  });

  it("should return an anonymous name when one is given", () => {
    expect(sayHello()).toEqual("Hello, anonymous");
  });
});
