import { describe, expect, test } from "vitest";
import { add, subtract, multiply, divide } from "./math.helper";

describe("add", () => {
  test("should add two positives numbers", () => {
    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = add(a, b);

    // ! 3. Assert
    expect(result).toBe(3);
  });
});

describe("subtract", () => {
  test("should return 0", () => {
    // ! 1. Arrange
    const a = 5;
    const b = 5;

    // ! 2. Act
    const result = subtract(a, b);

    // ! 3. Assert
    expect(result).toBe(0);
  });

  test("should return negative -10", () => {
    // ! 1. Arrange
    const a = -5;
    const b = 5;

    // ! 2. Act
    const result = subtract(a, b);

    // ! 3. Assert
    expect(result).toBe(-10);
  });
});

describe("multiply", () => {
  test("should return 0", () => {
    // ! 1. Arrange
    const a = 5;
    const b = 0;

    // ! 2. Act
    const result = multiply(a, b);

    // ! 3. Assert
    expect(result).toBe(0);
  });

  test("should return -25", () => {
    // ! 1. Arrange
    const a = -5;
    const b = 5;

    // ! 2. Act
    const result = multiply(a, b);

    // ! 3. Assert
    expect(result).toBe(-25);
  });

  describe("divide", () => {
    test("should divide two positive numbers ", () => {
      // ! 1. Arrange
      const a = 5;
      const b = 0;

      // ! 2. Act
      const result = divide(a, b);

      // ! 3. Assert
      expect(result).toBe(a / b);
    });
  });
});
