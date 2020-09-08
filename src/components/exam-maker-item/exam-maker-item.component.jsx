import React from 'react';

import './exam-maker-item.styles.scss';

function ExamMakerItem({ label, typeData, handleChange, data }) {
  return (
    <div className="exammaker__item">
      <div className=""> {label}</div>
      <input
        onChange={handleChange}
        type="text"
        name={typeData}
        placeholder={typeData}
        value={data}
        className="exammaker__input-text"
      />
    </div>
  );
}

export default ExamMakerItem;
