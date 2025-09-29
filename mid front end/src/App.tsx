import React, { useState } from "react";
import type { Task } from "./types";
import "./App.css";
import Tasklist from "./component/Tasklist";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "Belajar React", description: "Pelajari dasar React + hooks", status: false },
    { id: 2, name: "Kerjakan Tugas", description: "Selesaikan PR algoritma", status: false },
    { id: 3, name: "Ngoding Project", description: "Kerjakan proyek frontend", status: true },
  ]);

  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");

  // toggle status
  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: !t.status } : t))
    );
  };

  // delete
  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // move up
  const moveUp = (id: number) => {
    setTasks((prev) => {
      const index = prev.findIndex((t) => t.id === id);
      if (index > 0) {
        const newTasks = [...prev];
        [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
        return newTasks;
      }
      return prev;
    });
  };

  // move down
  const moveDown = (id: number) => {
    setTasks((prev) => {
      const index = prev.findIndex((t) => t.id === id);
      if (index < prev.length - 1) {
        const newTasks = [...prev];
        [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
        return newTasks;
      }
      return prev;
    });
  };

  // add new task
  const addTask = () => {
    if (newName.trim() === "" || newDesc.trim() === "") return;
    const newTask: Task = {
      id: Date.now(),
      name: newName,
      description: newDesc,
      status: false,
    };
    setTasks((prev) => [...prev, newTask]);
    setNewName("");
    setNewDesc("");
  };

  return (
    <div className="app-container">
      <h1 className="title">Task Management</h1>

      {/* Form Tambah Tugas */}
      <div className="add-task">
        <input
          type="text"
          placeholder="Nama tugas..."
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Deskripsi tugas..."
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <Tasklist
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onMoveUp={moveUp}
        onMoveDown={moveDown}
      />
    </div>
  );
};

export default App;
