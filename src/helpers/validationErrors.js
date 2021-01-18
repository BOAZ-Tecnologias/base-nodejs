export default function validationErrors(errors) {
  return {
    error: {
      name: 'Validation',
      message: 'Validation Errors',
      frames: errors,
    },
  };
}
