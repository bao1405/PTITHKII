import axios from "axios";

export default function Bai2() {
  axios
    .get("http://localhost:3000/students")
    .then((result) => console.log(result.data));
  return <div>Bt2</div>;
}