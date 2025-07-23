import { HashRouter, Route, Routes } from "react-router";
import { DefaultLayout } from "./layout/DefaultLayout.tsx";
import { Sub1 } from "./Sub1.tsx";
import { Sub2 } from "./Sub2.tsx";
import { Sub3 } from "./Sub3.tsx";
import { Sub4 } from "./Sub4.tsx";
import Index from "./Index.tsx";
import pkg from "../package.json" with { type: "json" };
import { isInValidVersion } from "../public/versioncheck.ts";
import { useEffect } from "react";

const pathNames = ["/sub1", "/sub2", "/sub3", "/sub4"];

export function App() {
  const curVersion = pkg.version;
  useEffect(() => {
    isInValidVersion(curVersion).then((result: boolean) => {
      // alert(result ? "equal" : "diff"); //true: equal version
      console.log(result);
    });

    return () => {
    };
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route>
          <Route index element={<Index></Index>}></Route>
        </Route>
        <Route
          element={
            <DefaultLayout
              pathNames={pathNames}
            >
            </DefaultLayout>
          }
        >
          <Route path="sub1" element={<Sub1></Sub1>}></Route>
          <Route path="sub2" element={<Sub2></Sub2>}></Route>
          <Route path="sub3" element={<Sub3></Sub3>}></Route>
          <Route path="sub4" element={<Sub4></Sub4>}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}
