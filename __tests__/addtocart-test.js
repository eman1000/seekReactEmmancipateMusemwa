import * as actions from "../src/routes/Home/module";
describe("actions", () => {
  it("should create an action to show payment success", () => {
    const expectedAction = {
		type: "ADD_TO_CART",
    };
    expect(actions.addToCart()).toEqual(expectedAction);
  });
});