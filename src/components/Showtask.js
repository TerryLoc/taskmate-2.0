export const Showtask = () => {
  const tasks = [
    { id: 1001, name: 'TASK A', time: '1:56:56 PM - 10/2/2024' },
    { id: 1002, name: 'TASK B', time: '1:56:56 PM - 10/2/2024' },
    { id: 1003, name: 'TASK C', time: '1:56:56 PM - 10/2/2024' },
    { id: 1004, name: 'TASK D', time: '1:56:56 PM - 10/2/2024' },
  ];

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">0</span>
        </div>
        <button className="clearAll">Clear All</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i className="bi bi-pencil"></i>
            <i className="bi bi-trash3"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
