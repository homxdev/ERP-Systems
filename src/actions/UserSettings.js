// import user settings action types

import { USER_SETTINGS_SAVE, USER_SETTINGS_UPDATE } from "./Types";

// create actions
export const userSettingSave = (payload) => ({
  type: USER_SETTINGS_SAVE,
  payload,
});
