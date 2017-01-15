const formatError = (error) => {
  if (!error) return '';

  let errorMessage;
  switch (error.status) {
    case 400:
      errorMessage = 'Something is wrong with the submitted data. Please try again.';
      break;
    case 401:
      errorMessage = 'Connection failed. Please login and try again.';
      break;
    case 403:
      errorMessage = 'You do not have the proper access rights.';
      break;
    case 404:
      errorMessage = 'We could not find what you were looking for.';
      break;
    case 500:
      errorMessage = 'The server could not fulfill your request. Please refresh and try again.';
      break;
    default:
      errorMessage = 'Cannot process your request due to an unknown error. Please refresh and try again.';
      break;
  }

  errorMessage += ` ${error.status ? `${error.status} - ` : ''}${error.message}`;

  return errorMessage;
};

export default formatError;
