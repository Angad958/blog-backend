const makeError = (error, statusCode) => ({
  statusCode,
  error: error.message || error,
});

const clientError = (res, error) => res.status(400).send(makeError(error, 400));

const serverError = (res, error) => res.status(500).send(makeError(error, 500));

const authenticationError = (res, error) =>
  res.status(401).send(makeError(error, 401));

const authorizationError = (res, error) =>
  res.status(403).send(makeError(error, 403));

const notFoundError = (res, error) =>
  res.status(404).send(makeError(error, 404));

const success = (res, data) => res.status(200).send(data);

const successMessage = (res, message) =>
  res.status(200).send({ statusCode: 200, message });

module.exports = {
  clientError,
  serverError,
  authenticationError,
  authorizationError,
  notFoundError,
  success,
  successMessage,
};
