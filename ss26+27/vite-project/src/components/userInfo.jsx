
export default class UserInfo extends Component {
    constructor(){
        users();
        this.UserInfo = {
            Name: "Nguyễn Văn A",
            sex: "Nam",
            age: "06/03/2024",
            email: "nva@example.com",
            address: "Thanh Xuân, Hà Nội"
        };
    }
  render() {
      return (
          <div>
              <h2>thông tin cá nhân</h2>
              <ul>
                <li><p>họ và tên: {this.UserInfo.Name}</p></li>
                <li><p>giới tính:{this.UserInfo.sex}</p></li>
                <li><p>Age: {this.UserInfo.age}</p></li>
                <li><p>Email: {this.UserInfo.email}</p></li>
                <li><p>Address:{this.UserInfo.address}</p></li>
              </ul>
          </div>
      );
  }
}
  