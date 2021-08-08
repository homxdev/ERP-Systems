/**
 * Course Student Dashboard Reducer
 */

import { EMAIL_ON_SWITCH_CHANGE, USER_SETTINGS_SAVE } from "actions/Types";

const INIT_STATE = {
  announcements: true,
  newsletterWeekly: false,
  promotionalMails: false,
  formDiscussion: false,
  userInfo: {},
};

const UserSettingsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    // update email settings
    case EMAIL_ON_SWITCH_CHANGE:
      return { ...state, [action.payload.key]: action.payload.value };
    case USER_SETTINGS_SAVE:
      return { ...state, userInfo: action.payload };
    // default option
    default:
      return { ...state };
  }
};

export default UserSettingsReducer;
