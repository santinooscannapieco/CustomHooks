import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
    
  const onInputChange = ({ target }) => {
    console.log(target);
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    ...formState, // uso spring operator para desestructurar el contenido
    onInputChange
  }
}
