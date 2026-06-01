import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "../MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName", () => {
    // console.log(document.body);
    const { container } = render(<MyAwesomeApp />);
    // screen.debug();
    // console.log(container.innerHTML);

    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");

    expect(h1?.textContent).toContain("Fernando");
    expect(h3?.textContent).toContain("Herrera");
  });
});

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName - screen", () => {
    // console.log(document.body);
    render(<MyAwesomeApp />);
    screen.debug();
    // console.log(container.innerHTML);

    const h1 = screen.getByTestId("first-name-title");
    expect(h1.innerHTML).toContain("Fernando");
  });

  test("should match snapshot", () => {
    const { container } = render(<MyAwesomeApp />);
    // expect(container).toMatchSnapshot();
    expect(screen.getByTestId("div-app")).toMatchSnapshot();
  });
});
