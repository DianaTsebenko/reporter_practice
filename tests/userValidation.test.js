import * as chai from "chai";
import { User } from "../business/userObject.js";
import { validateUser } from "../business/userService.js";

const { assert, expect } = chai;
chai.should();

const user = new User({
  name: "Diana",
  email: "diana@example.com",
  age: 20,
  roles: ["admin", "editor"],
});

describe("User validation via business layer", () => {
  it("should validate user - should style", () => {
    const result = validateUser(user);
    result.isValid.should.be.true;
    result.hasAdminRole.should.be.true;
    result.isEmailValid.should.be.true;
    result.isAdult.should.be.true;
  });

  it("should validate user - expect style", () => {
    const result = validateUser(user);
    expect(result.isValid).to.be.true;
    expect(result.hasAdminRole).to.be.true;
    expect(result.isEmailValid).to.be.true;
    expect(result.isAdult).to.be.true;
  });

  it("should validate user - assert style", () => {
    const result = validateUser(user);
    assert.isTrue(result.isValid);
    assert.isTrue(result.hasAdminRole);
    assert.isTrue(result.isEmailValid);
    assert.isTrue(result.isAdult);
  });
});
