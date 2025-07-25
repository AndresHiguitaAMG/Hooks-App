import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en el useForm', () => {
    const initialForm = {
        name: "Andrés",
        email: "andresh@google.com"
    }
    test('debe regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            handleOnChange: expect.any(Function),
            handleResetForm: expect.any(Function),
        });
    });

    test('debe cambiar el valor de la propiedad name del fomrulario', () => {
        const newName = "Margie";
        const { result } = renderHook(() => useForm(initialForm));
         const { handleOnChange } = result.current;
        act(() => {
            handleOnChange({target: {name: "name", value: newName}});
        });
        expect(result.current.formState.name).toBe(newName);
        expect(result.current.name).toBe(newName);
    });

    test('debe realizar el reset del formulario', () => {
        const newName = "Camila";
        const { result } = renderHook(() => useForm(initialForm));
         const { handleOnChange, handleResetForm } = result.current;
        act(() => {
            handleOnChange({target: {name: "name", value: newName}});
            handleResetForm();
        });
        expect(result.current.formState.name).toBe(initialForm.name);
        expect(result.current.name).toBe(initialForm.name);
    });
});