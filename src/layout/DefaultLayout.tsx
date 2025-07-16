import { Link, Outlet, useLocation } from "react-router";
import { type CSSProperties } from "react";

const style: CSSProperties = {
  width: "600px",
  height: "600px",
  border: "1px solid black",
};
const btnBoxStyle: CSSProperties = {
  width: "50%",
  display: "inline-flex",
  gap: "16px",
  alignItems: "center",
  justifyContent: "center",
  margin: "8px",
};
const flexBtnStyle: CSSProperties = {
  flexGrow: "1",
};

export function DefaultLayout({ pathNames }: { pathNames: string[] }) {
  const location = useLocation();
  const pathIndex = pathNames.findIndex((path) => {
    return location.pathname == path;
  });
  const prevPath = (pathIndex - 1 < 0)
    ? pathNames[0]
    : pathNames[pathIndex - 1];
  const nextPath = (pathIndex + 1) < pathNames.length
    ? pathNames[pathIndex + 1]
    : pathNames[pathNames.length];
  return (
    <>
      <h1>Main</h1>
      <div style={style}>
        <Outlet></Outlet>
      </div>
      <div style={btnBoxStyle}>
        <Link to={prevPath} viewTransition>Prev</Link>
        <button style={flexBtnStyle}>{location.pathname}</button>
        <Link to={nextPath} viewTransition>Next</Link>
      </div>
    </>
  );
}
