import withRole from "./withRole";
import { Role } from "../constants";

describe("withRole test", () => {
  it("should throw err", async () => {
    const mock = {
      state: {
        jwt: {
          roles: [],
        },
      },
    };
    const noop = () => {};
    let message = false;
    try {
      await withRole(Role.ADMIN)(mock, noop);
    } catch (err) {
      message = err.message;
    }
    expect(message).toBe(`Require roles ${Role.ADMIN}`);
  });
});
