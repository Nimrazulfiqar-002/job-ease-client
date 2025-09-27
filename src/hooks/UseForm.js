import { useState } from 'react';
//custom hook for change handling
export default function useForm(initialValues) {
  const [formData, setFormData] = useState(initialValues);

  const ChangeHandler = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return [formData, ChangeHandler, setFormData];
}
