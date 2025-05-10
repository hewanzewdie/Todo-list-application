import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (!task.trim()) {
      alert("Task cannot be empty!");
      return;
    }

    setTasks([...tasks, { text: task }]);
    setTask("");
  };

  const handleDelete = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  const handleUpdate = (index) => {
    if (!task.trim()) {
      alert("Task cannot be empty!");
      return;
    }

    const updated = [...tasks];
    updated[index].text = task;
    setTasks(updated);
    setTask("");
  };

  return (
    <div className="container mt-5">
      <h1>To-Do list</h1>
      <div className="row">
        <div className="col-md-6 mb-3">
          <input
            type="text"
            placeholder="task description ..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="form-control w-75"
          />
        </div>
        <div className="col-md-6">
          <button className="btn btn-primary w-25" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>

      <ul className="list-group mt-3">
        {tasks.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between"
          >
            <p className="mb-0">{item.text}</p>
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-success btn-sm m-2"
                onClick={() => handleUpdate(index)}
              >
                update
              </button>
              <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => handleDelete(index)}
              >
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
