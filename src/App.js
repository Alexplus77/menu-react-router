import React from "react";
import { Router } from "Routes";
import Menu from "pages/Menu";

import "index.css";
export default function App() {
  return (
    <div>
      <Menu />
      <Router />
    </div>
  );
}
