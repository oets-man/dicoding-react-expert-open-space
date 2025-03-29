/**
 * @TODO: Define all the actions (creator) for the users state
 */
import { showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { hideLoading } from 'react-redux-loading-bar';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
  REGISTER_USERS: 'REGISTER_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}
function registerUsersActionCreator() {
  return {
    type: ActionType.REGISTER_USERS,
  };
}

function asyncRegisterUser({ id, name, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(registerUsersActionCreator());
    try {
      await api.register({ id, name, password });
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
