import { useState } from 'react';
import PropTypes from 'prop-types'; 
import { deleteTask, updateTask } from '../api/api';

const TaskItem = ({ task, fetchTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleDelete = async () => {
    try {
      await deleteTask(task._id);
      fetchTasks(); 
    } catch (error) {
      console.error(`Error deleting task ${task._id}:`, error.message);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTask(task._id, editedTask);
      fetchTasks(); 
      setIsEditing(false);
    } catch (error) {
      console.error(`Error updating task ${task._id}:`, error.message);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Format the date as YYYY-MM-DD
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <form className="edit-form task-form" onSubmit={handleEditSubmit}>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleEditChange}
            required
          />
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleEditChange}
            required
          />  
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p><strong>Due Date:</strong> {formatDate(task.dueDate)}</p>
          <p className="prior"><strong>Priority:</strong> {task.priority}</p>
          <div className="actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

// PropTypes validation
TaskItem.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
  }).isRequired,
  fetchTasks: PropTypes.func.isRequired,
};

export default TaskItem;