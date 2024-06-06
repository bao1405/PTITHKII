
const ColorBox = ({ color }) => {
    let boxColor;
    switch (color) {
        case 'red':
            boxColor = 'red';
            break;
        case 'blue':
            boxColor = 'blue';
            break;
        case 'green':
            boxColor = 'green';
            break;
        default:
            boxColor = 'black';
            break;
    }

    const boxStyle = {
        width: '200px',
        height: '200px',
        backgroundColor: boxColor,
    };

    return <div style={boxStyle}></div>;
};

export default class Boxcolor extends Component {
    render() {
        return <ColorBox color={this.props.color} />;
    }
}
