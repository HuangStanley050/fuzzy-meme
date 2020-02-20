import React from "react";

const Home = () => {
  return (
    <div>
      <div>home component</div>
      <button onClick={() => console.log("hi there")}>Click Me</button>
    </div>
  );
};

export default { component: Home };
