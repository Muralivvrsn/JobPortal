import React from "react";

const Loading = ({load}) => {
  return (
    <div className="text-center spinner">
      <div className={`spinner-border text-success d-${load?"flex":"none"}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
    </div>
  );
};

export default Loading;
