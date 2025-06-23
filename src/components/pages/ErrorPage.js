import { use } from "react";
import { useRouteError } from "react-router";
const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <div className="error-container">
        <h1 style={{ color: "lightBlue" }}>Oops !</h1>
        <h2>
          {err.status} : {err.statusText}
        </h2>

        <img
          src="https://asia-exstatic.vivoglobal.com/static/img/image/404-PC_31daffa.png"
          alt="not found"
        />
      </div>
    </>
  );
};

export default ErrorPage;
