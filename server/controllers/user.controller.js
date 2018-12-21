import bcrypt from 'bcrypt';
import HttpStatus from 'http-status-codes';
import User from '../models/user.model';

/**
 * Find all the users
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
  new User()
    .fetchAll()
    .then(user => res.json({
      error: null,
      message: 'Success',
      data: user.toJSON(),
    }))
    .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      error: err,
      message: 'Failed to find all users.',
      data: {},
    }));
}

/**
 *  Find user by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findById(req, res) {
  new User({ id: req.params.id })
    .fetch()
    .then((user) => {
      if (!user) {
        res.status(HttpStatus.NOT_FOUND).json({
          error: null,
          message: 'User does not exist.',
          data: {},
        });
      } else {
        res.json({
          error: null,
          message: 'Success',
          data: user.toJSON(),
        });
      }
    })
    .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      error: err,
      data: {},
      message: 'Failed to find user by ID.',
    }));
}

/**
 * Store new user
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function create(req, res) {
  const { firstName, lastName, email } = req.body;
  const password = bcrypt.hashSync(req.body.password, 10);

  new User({
    firstName,
    lastName,
    email,
    password,
  })
    .save()
    .then(user => res.json({
      error: null,
      data: user.toJSON(),
      message: 'Success',
    }))
    .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      error: err,
      data: {},
      message: 'Failed to create user.',
    }));
}

/**
 * Update user by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function update(req, res) {
  new User({ id: req.params.id })
    .fetch({ require: true })
    .then(user => user
      .save({
        firstName: req.body.firstName || user.get('firstName'),
        lastName: req.body.lastName || user.get('lastName'),
        email: req.body.email || user.get('email'),
      })
      .then(() => res.json({
        error: null,
        data: user.toJSON(),
        message: 'Success',
      }))
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
        message: 'Failed to save update.',
        data: {},
      })))
    .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      error: err,
      message: 'Failed to find and update user.',
      data: {},
    }));
}

/**
 * Destroy user by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function destroy(req, res) {
  new User({ id: req.params.id })
    .fetch({ require: true })
    .then(user => user
      .destroy()
      .then(() => res.json({
        error: null,
        message: 'User deleted successfully.',
        data: {},
      }))
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
        message: 'Failed to delete user.',
        data: {},
      })))
    .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      error: err,
      message: 'Failed to find and delete user.',
      data: {},
    }));
}
