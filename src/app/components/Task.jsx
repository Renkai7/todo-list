const Task = ({ task, toggleTaskCompletion }) => {
  return (
    <div className="flex items-center justify-between">
      <span
        className={`text-lg font-semibold ${
          task.completed ? "line-through text-gray-400" : "text-gray-700"
        }`}
      >
        {task.name}
      </span>
      <button
        className="btn btn-sm btn-outline btn-primary ml-2"
        onClick={() => toggleTaskCompletion(task.id)}
      >
        {task.completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
};

export default Task;
