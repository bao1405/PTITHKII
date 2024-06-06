export default class classComponents extends Component {
  constructor(){
    super();
    this.state = {
      name:"Bao",
      address:"HN",
      cart:[{
        id:1,
        product:"phone"
      }],
      age:20
    }
  }
  render() {
    return (
      <div>classComponents
        <p>xin chào {this.state.name}</p>
        <ul>
          {this.state.cart.map((item,index)=>{
            return <li key = {index}>{item.product}</li>
          })}
        </ul>
      </div>
    )
  }
}
