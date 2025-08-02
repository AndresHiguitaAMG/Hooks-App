import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () => {
    const initialState = [{
        id: 1,
        description: "Demo Todo",
        done: false,
    }];

    test('debe de regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('debe agregar un todo', () => {
        const action = {
            type: "ADD_TODO",
            payload: {
                id: 1,
                description: "Entregar trabajo final de materia",
                done: false,
            }
        };
        const newState = todoReducer(initialState, action);
        // Que tenga dos entradas
        expect(newState.length).toBe(2);
        // toContain comprueba si contiene el objeto en este caso
        expect(newState).toContain(action.payload);
    });

    test('debe eliminar un todo', () => {
        const action = {
            type: "REMOVE_TODO",
            payload: {
                id: 2,
                description: "Entregar trabajo final de materia",
                done: false,
            }
        };
        const newState = todoReducer(initialState, action);
        expect(newState).not.toContain(action.payload);
    });

    test('debe realizar el toggle del todo', () => {
        const action = {
            type: "TOGGLE_TODO",
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        // Verifica que el primer elemento tenga done en true
        expect(newState[0].done).toBe(true);
        // const newState2 = todoReducer( newState, action );
        // expect( newState2[0].done ).toBe( false );
    }) 
});

