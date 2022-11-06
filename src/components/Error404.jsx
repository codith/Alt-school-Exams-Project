import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Error page</title>
        <meta name="description" content="Counter application Error page" />
        <link rel="canonical" href="/nopage"/>
      </Helmet>
      <div className="error__page">
        <p className="errorP"> Error 404! This page doesn't exist.</p>
        <Button onClick={() => navigate("/")}>Go Home</Button>
      </div>
    </>
  );
};
export default ErrorPage;