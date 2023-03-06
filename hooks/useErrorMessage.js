export const useErrorMessage = () => {
  return (errorMessage) => {
    const message = errorMessage.includes("auth/invalid-email")
      ? "El correo ingresado no existe"
      : errorMessage.includes("auth/wrong-password")
      ? "La contraseña es incorrecta."
      : errorMessage.includes("auth/email-alredy-in-use")
      ? "El correo ingresado ya está en uso"
      : errorMessage;
    return message;
  };
};
