import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en useCounter', () => {
    test('debe retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, handleIncrement, handleDecrement, handleReset } = result.current;
        expect(counter).toBe(10);
        expect(handleIncrement).toEqual(expect.any(Function));
        expect(handleDecrement).toEqual(expect.any(Function));
        expect(handleReset).toEqual(expect.any(Function));
        //ToEqual porqué es evaluación de un objeto
    });

    test('debe generar el counter con el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
        //Como solo usare la propiedad counter, no hago un destructuring, no es que uno sea mejor que el otro o sea mas eficiente ya que solo es ventaja para la legibilidad, pero en este caso los dejo así por ser solo una propiedad del custom hook la que necesito evaluar para este test, si fueran varias si sería necesario el destructuring
    })
    test('debe incrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, handleIncrement } = result.current;
        act(() => {
            handleIncrement();
            handleIncrement(2)
        });
        expect(result.current.counter).toBe(103)
    });

    test('debe decrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, handleDecrement } = result.current;
        act(() => {
            handleDecrement();
            handleDecrement(2)
        });
        expect(result.current.counter).toBe(97)
    });

    test('debe realizar el reset', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, handleIncrement, handleReset } = result.current;
        act(() => {
            handleIncrement();
            handleReset();
            console.log(result.current.counter);
        });
        expect(result.current.counter).toBe(100);
    });
});