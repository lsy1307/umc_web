function Todo({ id, content, isDone, makeDone, deleteTodo }) {
  let button;
  if (isDone) {
    button = <button onClick={() => deleteTodo(id)}>삭제</button>;
  } else {
    button = <button onClick={() => makeDone(id)}>완료</button>;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "200px",
        paddingBottom: "10px",
        borderBottom: "5px solid white",
        marginBottom: "10px",
      }}
    >
      <span>{content}</span>
      {button}
    </div>
  );
}

export default Todo;
