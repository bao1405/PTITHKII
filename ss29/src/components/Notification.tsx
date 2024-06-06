import React, { useState, useEffect } from 'react';

const Notification: React.FC = () => {
  const [showNotification, setShowNotification] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showNotification) {
      timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showNotification]);

  const handleShowNotification = () => {
    setShowNotification(true);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="notification-container">
      <button onClick={handleShowNotification}>Show notification</button>
      {showNotification && (
        <div className="notification" style={{ top: '10px', right: '10px' }}>
          <span>Hiển thị thông báo ở đây</span>
          <button onClick={handleCloseNotification} className="close-btn">X</button>
        </div>
      )}
    </div>
  );
};

export default Notification;
