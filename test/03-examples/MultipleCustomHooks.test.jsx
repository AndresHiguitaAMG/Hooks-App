import { act, screen, render, getByRole, fireEvent } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe('Pruebas en el componente MultipleCustomHooks', () => {
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        handleIncrement: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {
        // Deberiamos regresar lo mismo que se regresa. En este caso un objeto, es como una simulación.
        // Es el estado por defecto.
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
            error: null,
        });
        render(<MultipleCustomHooks />);
        expect(screen.getByText("Loading..."));
        expect(screen.getByText("Pokémon"));
        const nextButton = screen.getByRole("button",{name: "Next"});
        expect(nextButton.disabled).toBeTruthy();
        // screen.debug();
    })

    test('debe de mostrar un pokémon', () => {
        useFetch.mockReturnValue({
            data: {
                name: "Charmander",
                id: 2,
                sprites: {
                    back_default: "back_default",
                    back_shiny: "back_shiny",
                    front_default: "front_default",
                    front_shiny: "front_shiny",
                },
            },
            isLoading: false,
            hasError: null,
        });
        render(<MultipleCustomHooks />);
        // screen.debug();
        expect(screen.getByText("Charmander")).toBeTruthy();
        const backtButton = screen.getByRole("button",{name: "Back"});
        expect(backtButton.disabled).toBeFalsy();
    });

    test('debe de llegar la función de useCounter', () => {
        useFetch.mockReturnValue({
            data: {
                name: "Charmander",
                id: 2,
                sprites: {
                    back_default: "back_default",
                    back_shiny: "back_shiny",
                    front_default: "front_default",
                    front_shiny: "front_shiny",
                },
            },
            isLoading: false,
            hasError: null,
        });
        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole("button",{name: "Next"});
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled();
    });
});