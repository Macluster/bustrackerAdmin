import database from '../Backend/Firebase.js';
import { getDatabase, ref, set } from "firebase/database";

/**
 * @param {string} fare
 */
function writeUserData(fare) {
  const db = database
  set(ref(db, 'standardBusData/'), fare);
}

export default writeUserData;