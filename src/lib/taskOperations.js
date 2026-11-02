import db from "./db";

export async function createTask(taskData) {
  const newTask = {
    ...taskData,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const id = await db.tasks.add(newTask);
  return id;
}

export async function getAllTasks() {
  return await db.tasks.toArray();
}

export async function getTaskById(id) {
  const task = await db.tasks.get(id);
  return task ?? null;
}

export async function updateTask(id, updatedData) {
  if (!id) return false;

  const res = await db.tasks.update(id, {
    ...updatedData,
    updatedAt: new Date(),
  });

  return res > 0;
}

export async function deleteTask(id) {
  if (!id) return false;

  const task = await db.tasks.get(id);

  if (!task) return false;

  await db.tasks.delete(id);
  return true;
}
