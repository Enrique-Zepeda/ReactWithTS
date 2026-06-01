/* eslint-disable @typescript-eslint/no-unused-vars */
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render, screen } from "@testing-library/react";

// Creamos una función mock para espiar cuántas veces se renderiza ItemCounter
// y con qué props fue llamado.
const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid="ItemCounter" />;
});

// Reemplazamos el componente real ItemCounter por una versión falsa.
// Esto nos permite probar FirstStepsApp sin depender de la lógica interna de ItemCounter.
vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe("FirstStepsApp", () => {
  // Limpia el historial del mock después de cada test.
  // Así cada prueba empieza desde cero y no se mezclan llamadas anteriores.
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);

    // Compara el HTML renderizado con una versión guardada previamente.
    // Sirve para detectar cambios inesperados en la UI.
    expect(container).toMatchSnapshot();
  });

  test("should render the correct number of ItemCounter components", () => {
    render(<FirstStepsApp />);

    // Busca todos los componentes mockeados de ItemCounter en pantalla.
    const itemCounters = screen.getAllByTestId("ItemCounter");

    // Verifica que FirstStepsApp renderice exactamente 3 ItemCounter.
    expect(itemCounters.length).toBe(3);
  });

  test("should render ItemCounter with correct props", () => {
    render(<FirstStepsApp />);

    // Verifica que el componente ItemCounter fue llamado 3 veces.
    expect(mockItemCounter).toHaveBeenCalledTimes(3);

    // Verifica que cada ItemCounter recibió las props correctas.
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Nintendo Switch 2",
      quantity: 1,
    });

    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Pro Controller",
      quantity: 2,
    });

    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Super Smash",
      quantity: 5,
    });
  });
});
