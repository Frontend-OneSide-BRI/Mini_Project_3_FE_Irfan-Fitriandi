import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import routes from "./routes/routes";
import Loading from "src/components/atoms/Loading";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default App;
