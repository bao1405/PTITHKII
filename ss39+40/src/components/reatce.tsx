import React, { useState } from 'react';

const EmployeeManagementApp: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Quét nhà', completed: true },
    { id: 2, name: 'Giặt quần áo', completed: false }
  ]);

  const [newTaskName, setNewTaskName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTaskName.trim()) {
      setModalVisible(true);
      return;
    }
    const isDuplicate = tasks.some(task => task.name === newTaskName);
    if (isDuplicate) {
      setModalVisible(true);
      return;
    }
    const newTask = { id: tasks.length + 1, name: newTaskName, completed: false };
    setTasks([...tasks, newTask]);
    setNewTaskName('');
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
  };

  const handleTaskToggle = (taskId: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleDeleteTask = (taskId: number) => {
    setModalVisible(true);
    setTaskIdToDelete(taskId);
  };

  const confirmDelete = () => {
    if (taskIdToDelete !== null) {
      const updatedTasks = tasks.filter(task => task.id !== taskIdToDelete);
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setModalVisible(false);
    }
  };

  const cancelDelete = () => {
    setModalVisible(false);
    setTaskIdToDelete(null);
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <form
                  className="d-flex justify-content-center align-items-center mb-4"
                  onSubmit={handleSubmit}
                >
                  <div className="form-outline flex-fill">
                    <input
                      type="text"
                      id="form2"
                      className="form-control"
                      value={newTaskName}
                      onChange={handleInputChange}
                      placeholder='Nhập tên công việc'
                    />
                    <label className="form-label" htmlFor="form2">
                    </label>
                  </div>
                  <button type="submit" className="btn btn-info ms-2">
                    Thêm
                  </button>
                </form>

                <table className="table">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th><a href="">Tên công việc</a></th>
                      <th><a href="">Hoàn thành</a></th>
                      <th><a href="">Thao tác</a></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map(task => (
                      <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.completed ? <s>{task.name}</s> : task.name}</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleTaskToggle(task.id)}
                          />
                        </td>
                        <td>
                          <button className="btn btn-sm btn-danger" onClick={() => handleDeleteTask(task.id)}>
                            Xóa
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal xác nhận xóa */}
      {modalVisible && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Xác nhận</h2>
                <button type="button" className="btn-close" aria-label="Close" onClick={cancelDelete}>X</button>
              </div>
              <div className="modal-body">
                <p>Bạn có chắc chắn muốn xóa công việc này?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn-btn-secondary" onClick={cancelDelete}>Hủy</button>
                <button type="button" className="btn-btn-danger" onClick={confirmDelete}>Xóa</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EmployeeManagementApp;
