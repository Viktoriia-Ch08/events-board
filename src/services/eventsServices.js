import { onValue, ref } from "firebase/database";
import { db } from "../../firebase.config";

export const LIMIT_NUMBER = 3;
let nextLimit = LIMIT_NUMBER + 3;

export function fetchEventsData() {
  return new Promise((resolve, reject) => {
    const dataRef = ref(db);
    onValue(
      dataRef,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      (error) => {
        console.log(error.message);
        reject(error.message);
      }
    );
  });
}

export function fetchLimitedEventsData() {
  return new Promise((resolve, reject) => {
    const viewedCards = query(ref(db, "events"), limitToFirst(LIMIT_NUMBER));
    onValue(
      viewedCards,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      (error) => {
        console.log(error.message);
        reject(error.message);
      }
    );
  });
}

export function fetchNextEventsCards() {
  return new Promise((resolve, reject) => {
    const viewedCards = query(ref(db, "events"), limitToFirst(nextLimit));

    nextLimit += 3;

    onValue(
      viewedCards,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      (error) => {
        console.log(error.message);
        reject(error.message);
      }
    );
  });
}
