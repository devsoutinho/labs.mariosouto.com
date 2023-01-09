import { log } from "./log";

describe("log()", () => {
  it("must run", () => {
    log("rodou");
    expect(true).toBe(true);
  });
});
