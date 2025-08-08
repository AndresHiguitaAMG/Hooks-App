import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en <HomePage />', () => {
    const user = {
        id: 1,
        name: "Andrés"
    }
    test('debe de mostrar el componente sin el usuario', () => {
        render(
        <UserContext.Provider value={{user: null}}>
            <HomePage />
        </UserContext.Provider>);
        // screen.debug();
        const preTap = screen.getByLabelText("pre") //area-label
        expect(preTap.innerHTML).toBe("null");
    });

     test('debe de mostrar el componente con el usuario', () => {
        render(
        <UserContext.Provider value={{user}}>
            <HomePage />
        </UserContext.Provider>);
        // screen.debug();
        const preTap = screen.getByLabelText("pre") //area-label
        expect(preTap.innerHTML).toContain(user.name);
        expect(preTap.innerHTML).toContain(user.id.toString());
        //Vendria siendo lo mismo que usar toString();
        expect(preTap.innerHTML).toContain(`${user.id}`);
    });
});

