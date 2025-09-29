import React from "react";
import type { Task } from "../types";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle}>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </TaskItem>
      ))}
    </div>
  );
};

export default TaskList;
