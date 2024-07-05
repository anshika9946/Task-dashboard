import React from 'react';
import PropTypes from 'prop-types';
import { deleteTask } from '../api/api';

const TaskItem = ({ task, fetchTasks }) => {
  const handleDelete = async () => {
    try {
      await deleteTask(task._id); // Ensure task._id is passed to deleteTask function
      fetchTasks(); // Refresh tasks after deletion
    } catch (error) {
      console.error('Error deleting task:', error.message);
    }
  };

  return (
    <li className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="tags">
        {task.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <div className="actions">
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  fetchTasks: PropTypes.func.isRequired,
};

export default TaskItem;
