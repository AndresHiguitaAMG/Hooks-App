import { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';   

describe('Pruebas en useCounter', () => {
    test('debe retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        console.log(result)
    });
});