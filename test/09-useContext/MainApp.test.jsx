import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";
import { render, screen } from "@testing-library/react";

describe('Pruebas en <MainApp />', () => {
    test('debe de mostrar el HomePage', () => {
        render( 
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );
        // screen.debug();
        expect(screen.getByText("Home")).toBeTruthy();
    });

    test('debe de mostrar el LoginPage', () => {
        render(
            //initialEntries permite definir la ruta inicial
            //que se va a renderizar en el MemoryRouter
            <MemoryRouter initialEntries={["/login"]}>
                <MainApp />
            </MemoryRouter>
        );
        // screen.debug();
        expect(screen.getByText("Login")).toBeTruthy();
    });
});