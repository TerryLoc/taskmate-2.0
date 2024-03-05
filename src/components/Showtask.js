export const Showtask = ({ tasklist, setTasklist, task, setTask }) => {
  function handleDelete(id) {
    const updatedList = tasklist.filter((todo) => todo.id !== id);
    setTasklist(updatedList);
  }
  function handleEdit() {}

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button onClick={() => setTasklist([])} className="clearAll">
          Clear All
        </button>
      </div>
      <ul>
        {tasklist.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil"></i>
            <i
              onClick={() => handleDelete(todo.id)}
              className="bi bi-trash3"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
