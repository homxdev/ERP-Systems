import { database } from "./index";

/**
 * @param {String} tableName [Required]
 * @param { Object } payload [Required]
 */

function create(tableName, payload) {
  const tableRef = database.ref(tableName);
  tableRef.push(payload);
}

export { create };
