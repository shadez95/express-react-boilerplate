import Joi from 'joi';

export default {
  createUser: {
    body: {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(6)
        .required(),
    },
  },

  updateUser: {
    body: {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(6)
        .required(),
    },
    params: {
      userId: Joi.string()
        .hex()
        .required(),
    },
  },

  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required(),
    },
  },
};
