/**
 * @TODO: Define all the actions (creator) for the isPreLoad state
 */
import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

/**
 * Creates an action to set the preload state.
 *
 * @param {boolean} isPreload - The preload state to be set.
 * @returns {Object} The action object containing the type and payload.
 */

function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

/**
 * Async action creator to do preload process.
 *
 * This action creator does the following process:
 * 1. Try to get the current user profile and set the authUser state.
 * 2. If failed, set the authUser state to null.
 * 3. Finally, set the isPreload state to false.
 *
 * @function asyncPreloadProcess
 * @returns {Function} The thunk function.
 */
function asyncPreloadProcess() {
  return async (dispatch) => {
    try {
      // preload process
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      // fallback process
      dispatch(setAuthUserActionCreator(null));
    } finally {
      // end preload process
      dispatch(setIsPreloadActionCreator(false));
    }
  };
}

export { ActionType, setIsPreloadActionCreator, asyncPreloadProcess };
