import React from 'react';

const CustomInput = ({ label, optionText }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <label style={{ color: 'rgba(107, 107, 107, 1)' }}>{label} </label>
      <div className="custom-input">
        <select>
          <option>{optionText}</option>
        </select>
      </div>
    </div>
  );
};

export default CustomInput;
