import Dexie from "dexie";

const db = new Dexie("TaskManagerDB");

db.version(1).stores({
  tasks: "++id, title, status, createdAt",
});

export default db;
