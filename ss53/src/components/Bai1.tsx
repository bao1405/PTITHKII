type Callback = (result: number) => void;

// Định nghĩa hàm calculate với các kiểu dữ liệu rõ ràng
function calculate(a: number, b: number, callback: Callback): void {
  // Tính tổng của a và b
  const result = a + b;
  // Gọi callback function với kết quả vừa tính
  callback(result);
}

// Định nghĩa một callback function để in ra kết quả
const printResult: Callback = (result: number) => {
  console.log(`Kết quả của phép tính là: ${result}`);
};

// Sử dụng hàm calculate với các tham số a, b và callback function
calculate(5, 3, printResult);