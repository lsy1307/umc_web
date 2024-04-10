import { useState } from "react";
import "./App.css";
import Todo from "./components/toDo";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        content: inputValue,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue(""); // 입력 필드 초기화
    }
  };
  const makeDone = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div>
        <h1 style={{ fontSize: "40px" }}>UMC Study Plan</h1>
        <br />
        <hr style={{ maxWidth: "700px" }} />
      </div>
      <div>
        <input
          style={{
            marginTop: "30px",
            width: "500px",
            height: "50px",
            paddingLeft: "10px",
            fontSize: "20px",
          }}
          type="text"
          placeholder="UMC 스터디 계획을 작성해보세요!"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            width: "400px",
            minHeight: "500px",
            marginRight: "100px",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <label style={{ color: "white", marginBottom: "20px" }}>
            해야 할 일
          </label>
          <div>
            {todos
              .filter((todo) => !todo.isDone)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  makeDone={() => makeDone(todo.id)}
                />
              ))}
          </div>
        </div>
        <div
          style={{
            width: "400px",
            minHeight: "500px",
            marginRight: "100px",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <label style={{ color: "white", marginBottom: "20px" }}>
            해낸 일
          </label>
          <div>
            {todos
              .filter((todo) => todo.isDone)
              .map((doneTodo) => (
                <Todo key={doneTodo.id} {...doneTodo} deleteTodo={deleteTodo} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
