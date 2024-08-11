import App from "@/App";
import NotFoundPage from "@/pages/NotFound";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <div>
            <h1>Hello guys</h1>
          </div>
        ),
      },
      {
        path: "/login",
        element: (
          <div>
            <h1>Please, Login</h1>
          </div>
        ),
      },
    ],
  },
  {
    path:"*",
    element : <NotFoundPage/>
  }
]);

export default router;
