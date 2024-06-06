import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const AlertButton = () => {
  const [showAlert1, setShowAlert1] = useState(true);
  const [showAlert2, setShowAlert2] = useState(true);
  const [showAlert3, setShowAlert3] = useState(true);

  const handleClose1 = () => {
    setShowAlert1(false);
  };

  const handleClose2 = () => {
    setShowAlert2(false);
  };
  const handleClose3 = () => {
    setShowAlert3(false);
  };

  return (
    <>
      <Alert show={showAlert1} variant="success" onClose={handleClose1} dismissible>
        Thêm tài khoản thành công
      </Alert>

      <Alert show={showAlert2} variant="danger" onClose={handleClose2} dismissible className="mt-2">
        Thêm mới tài khoản thất bại!
      </Alert>
      <Alert show={showAlert3} variant="warning" onClose={handleClose3} dismissible className="mt-3">
        Tên không được để trống
      </Alert>
    </>
  );
};

export default AlertButton;
