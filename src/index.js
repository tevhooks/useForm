import { useState, useEffect } from "react";

/**
 * @param callback - fn -> a function that is called when all validation checks are cleared and handle submit is called
 * @param validate - fn -> a function that takes in the values passed and validates/checks for errors and returns the errors
 * @returns {
 *    errors {Object} - the errors object
 *    values {Object} - values that are to be validated
 *    handleChange {Function} - reuseable function that is used to handle input changes
 *    handleSubmit {Function} - function called when a form hits onSubmit
 *  }
 */
const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setisSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(values);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, errors, isSubmitting]);
  const handleChange = event => {
    event.persist();
    setErrors({});
    setisSubmitting(false);
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    setErrors(validate(values));
    setisSubmitting(true);
  };

  return {
    errors,
    values,
    handleChange,
    handleSubmit
  };
};

/**
 *
 * @param {Object} => {
 *   @property callback - fn -> a function that is called when all validation checks are cleared and handle submit is called
 *  @property validate - fn -> a function that takes in the values passed and validates/checks for errors and returns the errors
 *  @property children - fn -> Render a function as a child
 * }
 */
export const RenderUseForm = ({ callback, validate, children }) => {
  const vals = useForm(callback, validate);
  return children(vals);
};

export default useForm;
