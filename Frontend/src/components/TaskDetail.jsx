// src/components/TaskDetail.jsx
import React from 'react';

const TaskDetail = ({ task }) => {
  return (
    <div className="task-detail">
      <h2>Task Detail</h2>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Due Date:</strong> {task.dueDate}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default TaskDetail;
