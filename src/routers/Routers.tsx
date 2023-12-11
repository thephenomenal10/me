import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import HomePage from "../components/pages/Home/HomePage";
import { ROUTER } from "../constants/routers";
import ErrorHandler from "../components/common/ErrorHandler";
import Loading from "../components/common/Loading";

const routers = [
  {
    path: ROUTER.ROOT.path,
    element: <HomePage />,
    caseSensitive: true,
  },
  {
    path: ROUTER.HOME.path,
    element: <HomePage />,
    caseSensitive: true,
  },
];

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <ErrorHandler>
        <Suspense fallback={<Loading />}>
          <Routes>
            {routers.map(route => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
        </Suspense>
      </ErrorHandler>
    </BrowserRouter>
  );
};

export default Router;
