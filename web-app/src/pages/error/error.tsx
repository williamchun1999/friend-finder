import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      {isRouteErrorResponse(error) ? (
        <div>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.status}</i>
          </p>
        </div>
      ) : (
        "ERROR"
      )}
    </div>
  );
}
