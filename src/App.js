import "./App.css";
import Counter from "./Components/Counter";
import CounterHooks from "./Components/CounterHooks";
import AddPost from "./Components/PostApp/AddPost";
import PostList from "./Components/PostApp/PostList";

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <CounterHooks /> */}
      <AddPost />
      <PostList />
    </div>
  );
}

export default App;
