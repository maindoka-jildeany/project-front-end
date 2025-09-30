import React, { useState } from "react";
import "./App.css";
import Tasklist from "./component/Tasklist";
import useTasks from "./component/Usetask";


const App: React.FunctionComponent = () => {
  const { tasks, toggleTask, deleteTask, moveUp, moveDown, addTask } =
    useTasks([
      { id: 1, name: "Belajar React", description: "Pelajari dasar React + hooks", status: false },
      { id: 2, name: "Kerjakan Tugas", description: "Selesaikan PR algoritma", status: false },
      { id: 3, name: "Ngoding Project", description: "Kerjakan proyek frontend", status: true },
    ]);

  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const Addtask = () => {
    addTask(newName, newDesc);
    setNewName("");
    setNewDesc("");
  };

  return (
    <div className="app-container">
      <h1 className="title">Task Management</h1>

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
        <button onClick={Addtask}>Add</button>
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
