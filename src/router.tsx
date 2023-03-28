import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import App from "./App";
import Home from "./Home";

// 라우터를 object형식의 배열로 표현할 수 있다.
const router = createBrowserRouter([
  {
    // 첫번째 route는 전체 route들의 container격인 컴포넌트
    path: "/", // 이 경로로 갔을 때
    element: <App />, // 이 컴포넌트를 렌더링
    children: [
      {
        path: "", // '/'의 자식이라고 생각하면 됨
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
