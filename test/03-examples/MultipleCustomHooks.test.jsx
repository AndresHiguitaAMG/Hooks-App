import { screen, render, getByRole } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch")

describe('Pruebas en el componente MultipleCustomHooks', () => {
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
            data: null,
            isLoading: true,
            hasError: null,
            error: null,
        })
        render(<MultipleCustomHooks />);
        
    })
})