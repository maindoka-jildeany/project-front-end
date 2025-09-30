import React from "react";
import type { Task } from "../types";

type TaskItemProps = {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onMoveUp: (id: number) => void;
  onMoveDown: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggle,
  onDelete,
  onMoveUp,
  onMoveDown,
}) => {
  return (
    <li className={`task-item ${task.status ? "done" : ""}`}>
      <div className="task-info">
        <h3>{task.name}</h3>
        <p>{task.description}</p>
        <small>Status: {task.status ? "Done ✅" : "Pending ⏳"}</small>
      </div>

      <div className="task-actions">
        <button onClick={() => onToggle(task.id)}>Toggle</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
        <button onClick={() => onMoveUp(task.id)}>↑</button>
        <button onClick={() => onMoveDown(task.id)}>↓</button>
      </div>
    </li>
  );
};

export default TaskItem;
