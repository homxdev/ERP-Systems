// database connection
import { firebase } from "../../src/firebase/index";

export const create = (ref, payload) => {
  const tableRef = firebase.database().ref(ref);
  return tableRef.push(payload);
};
