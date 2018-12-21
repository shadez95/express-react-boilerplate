import {
  ENTITY_FAILURE,
  ENTITY_CREATE,
  ENTITY_UPDATE,
  ENTITY_FETCH,
  ENTITY_DELETE,
  SELECT_ENTITY_ITEM,
  CLEAR_ENTITY_LIST,
} from '../constants/actionType';

export function failure(error) {
  return {
    type: ENTITY_FAILURE,
    error,
  };
}

export function add(entity, data) {
  return {
    type: ENTITY_CREATE,
    entity,
    data,
  };
}

export function update(entity, data) {
  return {
    type: ENTITY_UPDATE,
    entity,
    data,
  };
}

export function fetch(entity, data) {
  return {
    type: ENTITY_FETCH,
    entity,
    data,
  };
}

export function destroy(entity, id) {
  return {
    type: ENTITY_DELETE,
    entity,
    id,
  };
}

export function selectItem(entity, data) {
  return {
    type: SELECT_ENTITY_ITEM,
    entity,
    data,
  };
}

export function clearList(entity) {
  return {
    type: CLEAR_ENTITY_LIST,
    entity,
  };
}
