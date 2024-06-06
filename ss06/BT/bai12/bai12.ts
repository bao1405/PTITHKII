const findLongestUniqueWord = (sentence: string): string => {
    // Tách câu thành các từ
    const words = sentence.split(" ");

    // Khởi tạo biến lưu trữ từ dài nhất không có các ký tự trùng nhau
    let longestUniqueWord = "";

    // Duyệt qua từng từ trong câu
    for (const word of words) {
        // Tạo một tập hợp chứa các ký tự duy nhất của từ
        const uniqueCharacters = new Set(word);

        // Kiểm tra xem số lượng ký tự duy nhất có bằng độ dài của từ không
        // và từ có dài hơn từ dài nhất đã tìm thấy trước đó không
        if (uniqueCharacters.size === word.length && word.length > longestUniqueWord.length) {
            // Nếu điều kiện được thỏa mãn, cập nhật từ dài nhất
            longestUniqueWord = word;
        }
    }

    // Trả về từ dài nhất không có các ký tự trùng nhau
    return longestUniqueWord;
};

// Ví dụ sử dụng:
const input = "hello world apple banana orange pumpkin cucumber";
const longestUniqueWord = findLongestUniqueWord(input);
console.log(longestUniqueWord); // Output: "orange"
