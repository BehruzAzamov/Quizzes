import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./features/home/Home";
import { loader as homeLoader } from "./components/Header";
import Quiz from "./features/quiz/Quiz";
import Error from "./components/Error";
import FinishedScreen from "./components/FinishedScreen";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,

      children: [
        {
          path: "/",
          element: <Home />,
          loader: homeLoader,
        },
        {
          path: "/:type",
          element: <Quiz />,
          errorElement: <Error />,
        },
        {
          path: "/finished",
          element: <FinishedScreen />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
