import { useState } from "react";
import type { Task } from "../types";

function useTasks(initialTasks: Task[]) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status: !task.status } : task))
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const moveUp = (id: number) => {
    setTasks((prev) => {
      const index = prev.findIndex((task) => task.id === id);
      if (index > 0) {
        const newTasks = [...prev];
        [newTasks[index - 1], newTasks[index]] = [
          newTasks[index],
          newTasks[index - 1],
        ];
        return newTasks;
      }
      return prev;
    });
  };

  const moveDown = (id: number) => {
    setTasks((prev) => {
      const index = prev.findIndex((task) => task.id === id);
      if (index < prev.length - 1) {
        const newTasks = [...prev];
        [newTasks[index + 1], newTasks[index]] = [
          newTasks[index],
          newTasks[index + 1],
        ];
        return newTasks;
      }
      return prev;
    });
  };

  const addTask = (name: string, description: string) => {
    if (name.trim() === "" || description.trim() === "") return;
    const newTask: Task = {
      id: Date.now(),
      name,
      description,
      status: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  return { tasks, toggleTask, deleteTask, moveUp, moveDown, addTask };
}

export default useTasks;
