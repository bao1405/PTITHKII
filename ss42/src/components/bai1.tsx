import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
export default function ReactBootstrap() {
    return (
        <div>
            <Button variant="primary">lưu</Button>{' '}
            <Button variant="secondary">huỷ</Button>{' '}
            <Button variant="success">Thành Công</Button>{' '}
            <Button variant="warning">Cảnh Báo</Button>{' '}
            <Button variant="danger">Báo lỗi</Button>{' '}
            <Button variant="info">Thông tin</Button>{' '}
            <Button variant="link">Đường dẫn</Button>
        </div>
    );
}