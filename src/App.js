import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage";
import MovieDetails from "./components/MovieDetails";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "movies/:movieId",
    element: <MovieDetails />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
