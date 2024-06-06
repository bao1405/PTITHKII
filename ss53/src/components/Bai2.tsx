// Định nghĩa kiểu cho callback function
type Callback = () => void;

// Định nghĩa hàm delayedCallback với các kiểu dữ liệu rõ ràng
function delayedCallback(callback: Callback, delay: number): void {
  // Sử dụng setTimeout để gọi callback function sau một khoảng thời gian nhất định
  setTimeout(callback, delay);
}

// Định nghĩa một callback function để sử dụng cho ví dụ
const exampleCallback: Callback = () => {
  console.log("Callback function được gọi sau khi delay");
};

// Sử dụng hàm delayedCallback với callback function và thời gian delay (miligiây)
delayedCallback(exampleCallback, 2000); // Gọi exampleCallback sau 2 giây
