import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout = () => {
  return (
    <div>
      <h1>Food App</h1>
      <p>Welcome to the Food App!</p>
      <p>This is a simple React application.</p>
      <p>Enjoy your meal!</p>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
export default AppLayout;
