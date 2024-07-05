import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const TaskItem = ({ task }) => {
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
        <button className="delete-btn">Delete</button>
      </div>
    </li>
  );
};

// PropTypes validation
TaskItem.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default TaskItem;
