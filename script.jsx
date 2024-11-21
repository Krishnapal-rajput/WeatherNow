// Import ReactDOM to render the application into the DOM
import { createRoot } from "react-dom/client";

// Importing the necessary functions from React Router for routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importing the main App component where the core logic and UI of the app resides
import App from "./App";

// Defining the application's routing system using React Router
const router = createBrowserRouter([
  {
    // The root path ("/") of the application will render the main App component
    path: "/", 
    element: <App />, // Rendering the App component when the user visits the root URL
  },
  {
    // A wildcard route that matches any other URL path (catch-all route)
    // If the user navigates to a non-existent page, this will render
    path: "*", 
    element: (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Page Not Found</h1> {/* Heading for the error message */}
        <p>Sorry, the page you're looking for does not exist.</p> {/* A descriptive error message */}
      </div>
    ), // Displaying a custom error message when the route doesn't match any defined path
  },
]);

// Selecting the root DOM element with the ID "root", which is where our React app will be injected
const root = createRoot(document.querySelector("#root"));

// Using the `RouterProvider` component to wrap the application and provide routing functionality
// The `router` object contains the route configuration we defined above
root.render(<RouterProvider router={router} />); 
