// src/components/StudentForm.js
import React, { useState, useEffect } from 'react';

function StudentForm({ onAdd, onEdit, editingStudent, setEditingStudent }) {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('active');
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingStudent) {
      setStudentId(editingStudent.studentId);
      setName(editingStudent.name);
      setDob(editingStudent.dob);
      setEmail(editingStudent.email);
      setStatus(editingStudent.status);
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date().toISOString().split('T')[0];

    if (dob > today) {
      setError('Ngày sinh không được vượt quá ngày hiện tại.');
      return;
    }

    const studentData = { studentId, name, dob, email, status };

    if (editingStudent) {
      onEdit(studentData);
      setEditingStudent(null); // Clear editing state
    } else {
      onAdd(studentData);
    }

    setStudentId('');
    setName('');
    setDob('');
    setEmail('');
    setStatus('active');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Mã SV:</label><br />
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
          disabled={!!editingStudent} // Chặn sửa khi đang ở chế độ chỉnh sửa
        />
      </div>
      <div>
        <label>Name:</label><br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date of Birth:</label><br />
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Status:</label><br />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="active">hoạt động</option>
          <option value="inactive">Không hoạt động</option>
        </select>
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit">{editingStudent ? 'Save Changes' : 'Add Student'}</button>
    </form>
  );
}

export default StudentForm;
