import { useState } from "react";

export default function useInput(validateFunc) {
  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  let isValid = isTouched && !hasError;

  function changeHandler(text) {
    setValue(text);
    setIsTouched(true);
    setHasError(!validateFunc(text));
  }

  function reset() {
    setValue("");
    setIsTouched(false);
    setHasError(false);
  }

  function inputStyles(styles) {
    const inputStyles = !hasError
      ? styles.input
      : { ...styles.input, ...styles["invalid-input"] };
    return inputStyles;
  }

  return { value, changeHandler, isValid, hasError, reset, inputStyles };
}
