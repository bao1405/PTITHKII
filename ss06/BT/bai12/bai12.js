var findLongestUniqueWord = function (sentence) {
    // Tách câu thành các từ
    var words = sentence.split(" ");
    // Khởi tạo biến lưu trữ từ dài nhất không có các ký tự trùng nhau
    var longestUniqueWord = "";
    // Duyệt qua từng từ trong câu
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        // Tạo một tập hợp chứa các ký tự duy nhất của từ
        var uniqueCharacters = new Set(word);
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
var input = "hello world apple banana orange pumpkin cucumber";
var longestUniqueWord = findLongestUniqueWord(input);
console.log(longestUniqueWord); // Output: "orange"
