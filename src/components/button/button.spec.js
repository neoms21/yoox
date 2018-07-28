import React from "react";
import ReactTestRenderer from "react-test-renderer";
import Button from "./button";
import { mount } from "enzyme";

describe("button unit tests", () => {
  let component;

  beforeEach(() => {
    const props = { id: "aa", actions: [{}, {}], arrowPosition: "left" };
    component = mount(<Button {...props} />);
  });

  it("should render the button component ", () => {
    const props = { id: "aa", actions: [{}, {}] };
    const component = ReactTestRenderer.create(<Button {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


  it("should show the pointer on right", () => {

    const props = { id: "aa", actions: [{}, {}], arrowPosition: "right" };
    component = mount(<Button {...props} />);
    const btn = component.find("#btnMain-aa");

    btn.simulate("click"); // first click to display the tooltip

    expect(component.state().showTooltip).toBeTruthy();
    expect(component.find(".tooltip-container-right").length).toEqual(1);

  });

  it("should hide the tooltip on second click", () => {
    const btn = component.find("#btnMain-aa");

    btn.simulate("click"); // first click to display the tooltip

    expect(component.state().showTooltip).toBeTruthy();
    expect(component.find(".tooltip-container-left").length).toEqual(1);
    expect(component.find("button").length).toBe(3);

    btn.simulate("click"); // click again to hide the tooltip

    expect(component.state().showTooltip).toBeFalsy();
    expect(component.find("button").length).toBe(1);
  });

  it("should handle outside click", () => {
    const btn = component.find("#btnMain-aa");

    btn.simulate("click"); // first click to display the tooltip

    expect(component.state().showTooltip).toBeTruthy();
    var event = new MouseEvent("mousedown");
    document.dispatchEvent(event);

    expect(component.state().showTooltip).toBeFalsy();
  });

  it("should call component unmount method", () => {
    const mockRemover = jest
      .spyOn(global, "removeEventListener")
      .mockImplementation(() => {});

    component.unmount();
    expect(mockRemover).toHaveBeenCalled();
  });
});
