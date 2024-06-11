const axios = require('axios');

// Gọi API
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data); // Xử lý dữ liệu nhận được từ API
  })
  .catch(error => {
    console.error('Có lỗi xảy ra:', error); // Xử lý lỗi nếu có
  });
  