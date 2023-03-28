import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header />
      {/* 컨테이너에서 Outlet을 넣고, children에 해당하는 path로 이동하게 되면, 해당 element로 Outlet을 대체하게 되므로 변경이 일어난다. */}
      <Outlet />
    </div>
  );
};

export default App;
