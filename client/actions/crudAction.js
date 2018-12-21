import history from '../utils/history';

/**
 * Import all commonAction as an object.
 */
import * as commonAction from './commonAction';

/**
 * Import all httpService as an object.
 */
import * as httpService from '../services/httpService';

/**
 * CRUD actions for the application.
 * Every time an action that requires the API is called, it first dispatch an "apiRequest" action.
 *
 * entity = 'Product', 'Employee', ...
 */

export function fetchAll(entity) {
  return dispatch => httpService
    .fetchEntity(entity)
    .then((response) => {
      dispatch(commonAction.fetch(entity, response.data));
    })
    .catch((error) => {
      dispatch(commonAction.failure(error));
    });
}

export function fetchById(entity, id) {
  return dispatch => httpService
    .fetchEntityById(entity, id)
    .then((response) => {
      dispatch(commonAction.selectItem(entity, response.data));
    })
    .catch((error) => {
      dispatch(commonAction.failure(error));
    });
}

export function createItem(entity, data) {
  return dispatch => httpService
    .createEntity(entity, data)
    .then((response) => {
      history.goBack();
    })
    .catch((error) => {
      dispatch(commonAction.failure(error));
    });
}

export function updateItem(entity, data, id) {
  return dispatch => httpService
    .updateEntity(entity, data, id)
    .then((response) => {
      history.goBack();
    })
    .catch((error) => {
      dispatch(commonAction.failure(error));
    });
}

export function destroyItem(entity, id, data) {
  return dispatch => httpService
    .destroyEntity(entity, id)
    .then((response) => {
      dispatch(fetchAll(entity, data));
    })
    .catch((error) => {
      dispatch(commonAction.failure(error));
    });
}

export function submitForm(entity, data, id) {
  return (dispatch) => {
    if (id) {
      dispatch(updateItem(entity, data, id));
    } else {
      dispatch(createItem(entity, data));
    }
  };
}
