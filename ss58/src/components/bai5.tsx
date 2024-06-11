import axios from "axios";

const createStudent = () => {
    const newStudent = {
      id: 6,
      student_name: "Nguyễn Văn F",
      email: "nguyenvanf@example.com",
      address: "303 Đường F, Quận 6, TP.HCM",
      phone: "0906789012",
      status: true,
      created_at: "2024-06-10"
    };

    axios
      .post("http://localhost:3000/students", newStudent)
      .then((response) => console.log("Student added:", response.data))
  };

  export default function Bai5() {
    createStudent();
    return (
      <div>Bt5</div>
    )
  }
  