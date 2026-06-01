import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";

describe("CustomHeader", () => {
  const title = "Test Title";
  const description = "Test description";

  test("should render the title correctly", () => {
    render(<CustomHeader title={title} />);
    // const titleElement = screen.getByText("Buscador de Gifs");
    // expect(titleElement).toBeDefined();
    expect(screen.getByText(title));
    // screen.debug();
  });

  test("should render the description when provided", () => {
    render(<CustomHeader title={title} description={description} />);
    // screen.debug();
    expect(screen.getByText(description));
    expect(screen.getByRole("paragraph")).toBeDefined();
    expect(screen.getByRole("paragraph").innerHTML).toBe(description);
  });

  test("should not render description when not provided", () => {
    const { container } = render(<CustomHeader title={title} />);
    const divElement = container.querySelector(".content-center");
    const h1 = divElement?.querySelector("h1");
    const p = divElement?.querySelector("p");
    // console.log(h1?.innerHTML);
    expect(h1?.innerHTML).toBe(title);
    expect(p?.innerHTML).not.toBeDefined();
  });
});
