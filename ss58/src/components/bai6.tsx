import axios from "axios";
let studentId = 4; //thay bằng id học sinh muốn đổi
const updateStudentById = (studentId: number) => {
    const updatedStudent = {
      student_name: "Nguyễn Văn F (Updated)",
      email: "nguyenvanf_updated@example.com",
      address: "303 Đường F, Quận 6, TP.HCM",
      phone: "0906789012",
      status: false,
      created_at: "2024-06-10"
    };

    axios
      .put(`http://localhost:3000/students/${studentId}`, updatedStudent)
      .then((response) => console.log("Student updated:", response.data))
      .catch((error) => console.error("Error updating student:", error));
  };

  
  export default function Bai6() {
    updateStudentById(studentId);
    return (
      <div>Bt6</div>
    )
  }
  