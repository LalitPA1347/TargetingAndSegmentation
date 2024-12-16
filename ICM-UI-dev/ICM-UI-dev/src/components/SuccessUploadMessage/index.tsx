import React from 'react';
import './styles.scss';

const SuccessUploadMessage: React.FC = () => {
  return (
    <div className="success-message-content">
      <div className="success-icon-container">
        <svg className="success-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      </div>
      <h2 id="dialogTitle" className="success-title">
        Download Successfully
      </h2>
      <p id="dialogDescription" className="success-description">
        You have downloaded the template successfully.
      </p>
    </div>
  );
};

export default SuccessUploadMessage;
