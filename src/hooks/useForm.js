import { useState } from 'react';

const useForm = ({ initialForm = {} }) => {
  const [formState, setFormState] = useState(initialForm);

  const handleOnChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return {
    ...formState,
    formState,
    handleOnChange,
  };
};

export default useForm;
