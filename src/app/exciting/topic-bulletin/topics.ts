interface FirestoreDate {
  seconds: number;
  nanoseconds: number;
}

export interface Topic {
  name: string;
  date: string;
  firestoreDate: FirestoreDate;
}

// export const Topics: Topic[] = [
//   { name: 'CMake', date: new Date() },
// ];
