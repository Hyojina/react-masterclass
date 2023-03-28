import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* RouterProvider는 createBrowerRouter 함수를 통해 만들어낸 객체를 router 속성 값으로 가짐 */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
