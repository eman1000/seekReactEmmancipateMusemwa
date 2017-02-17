import * as actions from "../src/routes/Home/module";
describe("actions", () => {
  it("should create an action to show payment success", () => {
    const expectedAction = {
		type: "MAKE_PAYMENT",
    };
    expect(actions.makePayment()).toEqual(expectedAction);
  });
});