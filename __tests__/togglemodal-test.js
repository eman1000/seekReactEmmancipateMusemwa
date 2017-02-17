import * as actions from "../src/routes/Home/module";
describe("actions", () => {
  it("should create an action to toggle a payment  modal", () => {
    const expectedAction = {
		type: "TOGGLE_MODAL",
    };
    expect(actions.toggleModal()).toEqual(expectedAction);
  });
});