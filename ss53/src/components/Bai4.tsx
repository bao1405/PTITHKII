// Định nghĩa kiểu cho callback function
type Callback = (number: number) => void;

// Định nghĩa hàm displayNumbers với các kiểu dữ liệu rõ ràng
function displayNumbers(callback: Callback, delay: number): void {
  let count = 1;
  
  // Sử dụng setInterval để gọi callback function định kỳ
  setInterval(() => {
    callback(count);
    count++;
  }, delay);
}

// Định nghĩa một callback function để in ra kết quả
const printNumber: Callback = (number: number) => {
  console.log(`Số thứ tự: ${number}`);
};

// Sử dụng hàm displayNumbers với callback function và thời gian delay (miligiây)
displayNumbers(printNumber, 1000); // In ra số lần lượt mỗi giây
