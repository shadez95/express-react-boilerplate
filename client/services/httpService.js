// Import custom utils
import {
  fetch, create, update, destroy,
} from '../utils/httpUtil';
import { getPathParam, getQueryParam } from '../utils/serializeUtil';

import { API_URL } from '../config/config';

export function fetchEntity(entityName) {
  return fetch(API_URL, entityName.toLowerCase());
}

export function fetchEntityById(entityName, dataId) {
  return fetch(API_URL, getPathParam(entityName.toLowerCase(), dataId));
}

export function createEntity(entityName, data) {
  return create(API_URL, entityName.toLowerCase(), data);
}

export function updateEntity(entityName, data, dataId) {
  return update(API_URL, getPathParam(entityName.toLowerCase(), dataId), data);
}

export function destroyEntity(entityName, dataId) {
  return destroy(API_URL, getPathParam(entityName.toLowerCase(), dataId));
}
