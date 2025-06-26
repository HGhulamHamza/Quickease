import React from "react";

const SubPage = ({ title }) => {
  return (
    <div style={{ padding: 20 }}>
      <h2>{title}</h2>
      <p>Dummy content for the <strong>{title}</strong> page.</p>
    </div>
  );
};

export default SubPage;
