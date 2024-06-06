
export default class Formatname extends Component {
  render() {
    const user = {
        firstName: "Nguyễn Văn",
        lastName: "Nam"
    };
    return (
        <p>Họ và tên: {user.firstName} {user.lastName}</p>
    )
  }
}
