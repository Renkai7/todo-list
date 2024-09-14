"use client";
import TodoList from "./TodoList";
const { useState } = require("react");

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [taskId, setTaskId] = useState(1);

  const addTask = () => {
    // * prevent adding empty tasks
    if (newTask.trim() === "") return;

    const newTaskObj = {
      id: taskId,
      name: newTask,
      completed: false,
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask("");
    setTaskId(taskId + 1);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="input input-bordered w-full max-w-xs mr-3"
      />
      <button onClick={addTask} className="btn">
        Add Task
      </button>
      <TodoList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
};

export default TodoApp;
