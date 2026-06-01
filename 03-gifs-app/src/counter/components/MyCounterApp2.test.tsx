import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
import { fireEvent, render, screen } from "@testing-library/react";
// import { useCounter } from '../hooks/useCounter';

const handleAddMock = vi.fn();
const handleResetMock = vi.fn();
const handleSubtractMock = vi.fn();

vi.mock("../hooks/useCounter", () => ({
  useCounter: () => ({
    counter: 20,
    handleAdd: handleAddMock,
    handleReset: handleResetMock,
    handleSubtract: handleSubtractMock,
  }),
}));

describe("MyCounterApp", () => {
  test("should render the component", () => {
    render(<MyCounterApp />);
    // screen.debug();

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(`counter: 20`);

    expect(screen.getByRole("button", { name: "+1" }).innerHTML).toBeDefined();
    expect(screen.getByRole("button", { name: "-1" }).innerHTML).toBeDefined();
    expect(screen.getByRole("button", { name: "Reset" }).innerHTML).toBeDefined();
  });

  test("should call handleAdd if button is clicked", () => {
    render(<MyCounterApp />);
    const button = screen.getByRole("button", { name: "+1" });
    fireEvent.click(button);
    expect(handleAddMock).toHaveBeenCalled();
    expect(handleResetMock).not.toHaveBeenCalled();
    expect(handleSubtractMock).not.toHaveBeenCalled();
  });
});
