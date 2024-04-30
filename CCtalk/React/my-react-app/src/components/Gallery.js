import Profile from "./Profile"
import TodoList from "./TodoList"

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <TodoList />
    </section>
  );
}
