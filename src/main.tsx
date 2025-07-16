import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { DefaultLayout } from "./layout/DefaultLayout.tsx";
import { Sub1 } from "./Sub1.tsx";
import { Sub2 } from "./Sub2.tsx";
import { Sub3 } from "./Sub3.tsx";
import { Sub4 } from "./Sub4.tsx";

const pathNames = ["/", "/sub1", "/sub2", "/sub3"];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout pathNames={pathNames}></DefaultLayout>}>
          <Route index element={<App></App>}></Route>
          <Route path="sub1" element={<Sub1></Sub1>}></Route>
          <Route path="sub2" element={<Sub2></Sub2>}></Route>
          <Route path="sub3" element={<Sub3></Sub3>}></Route>
          <Route path="sub4" element={<Sub4></Sub4>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
