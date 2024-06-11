import axios from "axios";

export default function Bai3() {
    let id = 1; 
  axios
    .get(`http://localhost:3000/students/${id}`)
    .then((result) => console.log(result.data));
  return <div>Bt3</div>;
}