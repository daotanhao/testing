import React, { useState } from 'react';

const Authorization = () => {
  const [apiUrl, setApiUrl] = useState(''); // Trạng thái lưu trữ giá trị của ô nhập API URL
  const [authType, setAuthType] = useState(''); // Trạng thái lưu trữ giá trị của danh sách chọn

  // Hàm xử lý sự kiện thay đổi giá trị của ô nhập API URL
  const handleApiUrlChange = (e) => {
    setApiUrl(e.target.value);
  };

  // Hàm xử lý sự kiện thay đổi giá trị của danh sách chọn
  const handleAuthTypeChange = (e) => {
    setAuthType(e.target.value);
  };

  // Render giao diện
  return (
    <div>
      <h1>API Test</h1>
      <label>
        API URL:{' '}
        <input type="text" value={apiUrl} onChange={handleApiUrlChange} />
      </label>
      <br />
      <label>
        Auth Type:{' '}
        <select value={authType} onChange={handleAuthTypeChange}>
          <option value="">No Auth</option>
          <option value="bearer">Bearer Token</option>
          <option value="basic">Basic Auth</option>
        </select>
      </label>
      <br />
      {authType === 'bearer' && (
        <div>
          {/* Hiển thị ô nhập Bearer Token */}
          <label>
            Bearer Token: <input type="text" placeholder="Enter bearer token" />
          </label>
          <br />
        </div>
      )}
      {authType === 'basic' && (
        <div>
          {/* Hiển thị ô nhập tên người dùng và mật khẩu */}
          <label>
            Username: <input type="text" placeholder="Enter username" />
          </label>
          <br />
          <label>
            Password: <input type="password" placeholder="Enter password" />
          </label>
          <br />
        </div>
      )}
      <button>Send Request</button>
    </div>
  );
};

export default Authorization;
