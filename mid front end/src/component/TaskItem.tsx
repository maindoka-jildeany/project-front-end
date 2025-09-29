import React from "react";
import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  children?: React.ReactNode; // untuk tombol tambahan (ex: Delete)
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, children }) => {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      marginBottom: "8px",
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "8px"
    }}>
      <span
        onClick={() => onToggle(task.id)}
        style={{
          textDecoration: task.status === "done" ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task.title}
      </span>
      <div>{children}</div>
    </div>
  );
};

export default TaskItem;
