import React from "react";

const HelloWorld = ({ tech }) => {
  return (
    <div >
      Hello World <span className="hello-world__tech">{tech}!</span>
    </div>
  );
};

export default HelloWorld;
