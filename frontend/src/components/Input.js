import React from 'react';

// import { Container } from './styles';

export default function Input({id, label, name, placeholder, type, value, onChange}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        id={id}
        placeholder={placeholder}
        className="form-control"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
