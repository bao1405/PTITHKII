// src/App.js
import React, { useState } from 'react';
import StudentList from './component/StudentList';
import StudentForm from './component/StudentForm';

export default function App() {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const addStudent = (student) => {
    setStudents([...students, student]);
    setShowForm(false); // Ẩn form sau khi thêm sinh viên
  };

  const editStudent = (updatedStudent) => {
    setStudents(students.map(student => 
      student.studentId === updatedStudent.studentId ? updatedStudent : student
    ));
    setShowForm(false); // Ẩn form sau khi chỉnh sửa sinh viên
  };

  const deleteStudent = (studentId) => {
    setStudents(students.filter(student => student.studentId !== studentId));
  };

  const blockStudent = (studentId) => {
    setStudents(students.map(student => 
      student.studentId === studentId ? { ...student, status: 'inactive' } : student
    ));
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  return (
    <div>
      <h1>Student Management</h1>
      <button onClick={() => {
        setEditingStudent(null);
        setShowForm(!showForm);
      }}>
        {showForm ? 'Hide Form' : 'Thêm Sinh Viên'}
      </button>
      {showForm && (
        <div className="overlay">
          <div className="modal">
            <button className="close-button" onClick={() => setShowForm(false)}>X</button>
            <StudentForm 
              onAdd={addStudent} 
              onEdit={editStudent} 
              editingStudent={editingStudent}
              setEditingStudent={setEditingStudent}
            />
          </div>
        </div>
      )}
      <StudentList students={students} onDelete={deleteStudent} onEdit={handleEdit} onBlock={blockStudent} />
    </div>
  );
}