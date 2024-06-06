// Định nghĩa kiểu cho callback function
type Callback = (element: number) => void;

// Định nghĩa hàm processArray với các kiểu dữ liệu rõ ràng
function processArray(arr: number[], callback: Callback): void {
  // Duyệt qua mảng sử dụng forEach
  arr.forEach((element, index) => {
    // Sử dụng setTimeout để gọi callback function với từng phần tử của mảng sau 1 giây
    setTimeout(() => {
      callback(element);
    }, index * 1000); // Delay dựa trên chỉ số của phần tử để in ra lần lượt
  });
}

// Định nghĩa một callback function để in ra kết quả
const printElement: Callback = (element: number) => {
  console.log(`Phần tử: ${element}`);
};

// Sử dụng hàm processArray với mảng các số nguyên và callback function
const array = [1, 2, 3, 4, 5];
processArray(array, printElement);
