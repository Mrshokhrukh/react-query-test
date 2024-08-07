import React from "react";
import { Link, Outlet } from "react-router-dom";

type RootProps = {};

const Root: React.FC<RootProps> = () => {
  return (
    <>
      <div className="main">
        <Link to="/">home</Link>
        <Link to="/useEffect">UseEffect</Link>
        <Link to="/react-query">React query</Link>
        <Link to="/RTK-query">RTK query</Link>
        <Link to="/rtk-query@react-query">RTK + RQuery</Link>
      </div>
      <Outlet />
    </>
  );
};
export default Root;
