export const Addtask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();

    const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })} ${date.toLocaleDateString()}`,
    };
    setTasklist([...tasklist, newTask]);
    e.target.task.value = '';
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
          maxLength="30"></input>
        <button type="submit">Add</button>
      </form>
    </section>
  );
};
