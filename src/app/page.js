import TodoApp from "@components/TodoApp";

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="my-4">My To-do List</h1>
      <TodoApp />
    </div>
  );
}
