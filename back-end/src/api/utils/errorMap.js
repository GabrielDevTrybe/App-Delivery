const errorMap = {
  INVALID_FIELDS: 400,
  FIELDS_ARE_MISSING: 400,
  INVALID_SIZE: 400,
  INVALID_EMAIL: 400,
  INVALID_PASSWORD_LENGTH: 400,
  NAME_IS_REQUIRED: 400,
  CATEGORY_ID_NOT_FOUND: 400,
  UNAUTHORIZED_USER: 401,
  TOKEN_NOT_FOUND: 401,
  EXPIRED_TOKEN: 401,
  USER_DOES_NOT_EXIST: 404,
  POST_DOES_NOT_EXIST: 404,
  USER_ALREADY_REGISTERED: 409,
  NOT_FOUND: 404,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
