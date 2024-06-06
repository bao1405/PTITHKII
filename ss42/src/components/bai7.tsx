import "bootstrap/dist/css/bootstrap.min.css";
import { Toast, ToastContainer } from 'react-bootstrap';
import { useState } from 'react';

export default function ReactBootstrapToasts() {
    const [showToast, setShowToast] = useState(false);

    const toggleToast = () => setShowToast(!showToast);

    return (
        <div>
            <ToastContainer position="top-end" className="p-3">
                <Toast show={showToast} onClose={toggleToast}>
                    <Toast.Header>
                        <strong className="me-auto">Thông báo</strong>
                        <small>1 giây trước</small>
                    </Toast.Header>
                    <Toast.Body>Xin chào! Đây là một toast message.</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
}
