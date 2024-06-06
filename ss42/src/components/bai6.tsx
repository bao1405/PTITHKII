import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from 'react-bootstrap/Spinner';

export default function ReactBootstrap() {
    return (
        <div>
            <Spinner animation="border" variant="primary" /> lưu{''}
            <Spinner animation="border" variant="secondary" />huỷ{' '}
            <Spinner animation="border" variant="success" />thành công{' '}
            <Spinner animation="border" variant="warning" />cảnh báo{' '}
            <Spinner animation="border" variant="danger" />báo lỗi{' '}
            <Spinner animation="border" variant="info" />thông tin{' '}
            <Spinner animation="border" variant="light" />đường dẫn{' '}
        </div>
    );
}
