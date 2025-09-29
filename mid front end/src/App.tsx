import React, { useState } from "react";
import type { Task } from "./types";
import TaskList from "./component/TaskList";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Belajar React", status: "pending" },
    { id: 2, title: "Belajar TypeScript", status: "done" },
  ]);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "done" ? "pending" : "done" }
          : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      status: "pending",
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const [newTask, setNewTask] = useState("");

  return (
    <div style={{ width: "400px", margin: "50px auto", fontFamily: "sans-serif" }}>
      <h1>To-Do App</h1>

      <div style={{ marginBottom: "16px" }}>
        <input
          type="text"
          value={newTask}
          placeholder="Tambah tugas..."
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={() => { addTask(newTask); setNewTask(""); }}>
          Add
        </button>
      </div>

      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;
