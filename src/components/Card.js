// src/components/Card.js
import React from 'react';

const Card = ({ title, content, footer, children }) => {
  return (
    <div className="card p-4 bg-white shadow rounded">
      {title && <div className="card-header text-xl font-bold">{title}</div>}
      <div className="card-body">{content || children}</div>
      {footer && <div className="card-footer text-sm text-gray-600">{footer}</div>}
    </div>
  );
};

export default Card;
