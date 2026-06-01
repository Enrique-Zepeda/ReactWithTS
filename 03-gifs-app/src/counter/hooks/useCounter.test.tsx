import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should initialize with default value of 10", () => {
    // renderHook permite probar un custom hook sin crear un componente real.
    const { result } = renderHook(() => useCounter());

    // result.current contiene el valor actual que retorna el hook.
    expect(result.current.counter).toBe(10);
  });

  test("should initialize with value 20", () => {
    const initialValue = 20;

    // Aquí probamos que el hook pueda recibir un valor inicial personalizado.
    const { result } = renderHook(() => useCounter(initialValue));

    expect(result.current.counter).toBe(initialValue);
  });

  test("should increment counter when handleAdd is called", () => {
    const { result } = renderHook(() => useCounter());

    // act se usa cuando una acción cambia el estado del hook.
    // En este caso, handleAdd actualiza el counter.
    act(() => {
      result.current.handleAdd();
    });

    act(() => {
      result.current.handleAdd();
    });

    // Como inició en 10 y sumamos 2 veces, esperamos 12.
    expect(result.current.counter).toBe(12);
  });

  test("should decrease counter when handleSubtract is called", () => {
    const { result } = renderHook(() => useCounter());

    // handleSubtract modifica el estado, por eso se ejecuta dentro de act.
    act(() => {
      result.current.handleSubtract();
    });

    // Como inició en 10 y restamos 1, esperamos 9.
    expect(result.current.counter).toBe(9);
  });

  test("should reset counter when handleReset is called", () => {
    const { result } = renderHook(() => useCounter());

    // Primero cambiamos el estado del contador.
    act(() => {
      result.current.handleAdd();
    });
    expect(result.current.counter).toBe(11);

    // Luego probamos que handleReset regrese el contador al valor inicial.
    act(() => {
      result.current.handleReset();
    });

    expect(result.current.counter).toBe(10);
  });
});
