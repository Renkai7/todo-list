import Task from "./Task";

const TodoList = ({ tasks, toggleTaskCompletion }) => {
  if (tasks.length === 0) {
    return <NoTasksMessage />;
  }

  return (
    <ul className="list-disc list-inside mt-4">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
};

const NoTasksMessage = () => (
  <li className="text-gray-500">No tasks available</li>
);

const TodoItem = ({ task, toggleTaskCompletion }) => (
  <li className="bg-white shadow-lg rounded-lg p-3 my-2 border border-gray-300 hover:bg-gray-100">
    <Task task={task} toggleTaskCompletion={toggleTaskCompletion} />
  </li>
);

export default TodoList;
