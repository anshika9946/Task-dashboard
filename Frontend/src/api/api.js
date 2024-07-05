// src/api/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/tasks'; // Replace with your backend API URL

// Function to fetch all tasks
export const fetchTasks = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error.message);
    throw error;
  }
};

// Function to create a new task
export const createTask = async (newTask) => {
  try {
    const response = await axios.post(BASE_URL, newTask);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error.message);
    throw error;
  }
};

// Function to update an existing task
export const updateTask = async (taskId, updatedTask) => {
  try {
    const response = await axios.put(`${BASE_URL}/${taskId}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error(`Error updating task ${taskId}:`, error.message);
    throw error;
  }
};

// Function to delete a task
export const deleteTask = async (taskId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${taskId}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error deleting task ${taskId}: ${error.message}`);
    }
  };
