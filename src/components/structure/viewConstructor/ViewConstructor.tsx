// src/components/layout/Container.tsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../jaze/sidebar/Sidebar";
import styles from "./ViewConstructor.module.css";
import { ViewConstructorProps } from "../../../types/structureTypes";
import ViewTitleBar from "../../jaze/viewTitleBar/ViewTitleBar";
import { useViewTitle } from "../../../contexts/ViewTitleContexts";

const Settings = lazy(() => import("../../../Application/Settings/Settings"));
const Form = lazy(() => import("../../../Application/Form/Form"));
const Main = lazy(() => import("../../../Application/Main/Main"));
const Tops = lazy(() => import("../../../Application/Tops/Tops"));
const LandingPage = lazy(() => import("../../../Application/LandingPage/LandingPage"),);
const TestBench = lazy(() => import("../../../Application/testBench/TestBench"),);

const ViewConstructor: React.FC<ViewConstructorProps> = () => {
  const { title } = useViewTitle();

  return (
    <>
      <div className={styles.viewConstructor}>
        <Sidebar />
        <div>
          <Suspense
            fallback={
              <div className={styles.viewModuleConstructor}>Loading...</div>
            }
          >
            <div className={styles.viewModuleConstructor}>
              <ViewTitleBar title={title} />
              <Routes>
                {/*<Route path="/main" element={<Form />} />*/}
                <Route path="/" element={<LandingPage />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/Main" element={<Main />} />
                <Route path="/Form" element={<Form />} />
                <Route path="/tops" element={<Tops />} />
                <Route path="/testBench" element={<TestBench />} />
              </Routes>
            </div>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default ViewConstructor;
