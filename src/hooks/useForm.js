import { useState } from "react";

const useForm = (initialState, validate, onSubmit) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      onSubmit(formData, () => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData(initialState);
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    setIsSubmitted,
  };
};

export default useForm;