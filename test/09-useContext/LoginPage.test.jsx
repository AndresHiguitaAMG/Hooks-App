import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Prueba en <LoginPage />', () => {
    const setUserMock = jest.fn();
     beforeEach(() => jest.clearAllMocks);
     
     const user = {
        id:468,
        name: "Andrés",
        email: "andres@avedmusic.com"
    };

    test('debe de mostrar el componente sin en el usuario', () => {
        render(
        <UserContext.Provider value={{user: null}}>
            <LoginPage />
        </UserContext.Provider>);
                // screen.debug();
        const preTap = screen.getByLabelText("pre2") //area-label
        expect(preTap.innerHTML).toBe("null");
    });

    test('debe de llamar el setUser cuando se hace click en el boton', () => {
         render(
        <UserContext.Provider value={{user, setUser: setUserMock}}>
            <LoginPage />
        </UserContext.Provider>);
        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);
        screen.debug();
        expect(setUserMock).toHaveBeenCalledWith(user);
    });
});