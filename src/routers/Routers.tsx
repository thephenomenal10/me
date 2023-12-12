import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import { HomePage, AboutMePage } from "../components/pages";
import { ROUTER } from "../constants/routers";
import ErrorHandler from "../components/common/ErrorHandler";
import Loading from "../components/common/Loading";
import NavBar from "../components/common/NavBar";
import ResumePage from "../components/pages/Resume/ResumePage";
import WorkExp from "../components/pages/Work/WorkExp";

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
  {
    path: ROUTER.ABOUT.path,
    element: <AboutMePage />,
    caseSensitive: true,
  },
  {
    path: ROUTER.RESUME.path,
    element: <ResumePage />,
    caseSensitive: true,
  },
  {
    path: ROUTER.WORK_EXPERIENCE.path,
    element: <WorkExp />,
    caseSensitive: true,
  },
];

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
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
