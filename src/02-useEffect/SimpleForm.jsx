import { useEffect, useState } from 'react';
import Message from './Message';

const SimpleForm = () => {
    const [ formState, setFormState ] = useState(
        {
            username: "Andres",
            email: "example@google.com",
        }
    );
    
    const { username, email } = formState;

    useEffect(() => {
        // console.log('Use')
    }, []);

    useEffect(() => {
        // console.log('Usef')
    }, [formState]);

    const handleOnChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />
        <input 
        type={'text'}
        className="form-control"
        placeholder="username"
        name={'username'}
        value={username}
        onChange={handleOnChange}
        />
        
        <input 
        type={'email'}
        className="form-control mt-2"
        placeholder="example@google.com"
        name={'email'}
        value={email}
        onChange={handleOnChange}
        />

        {
            (username === "Andres") && <Message /> 
        }
    </>
  )
}

export default SimpleForm;