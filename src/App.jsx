import React, { useState } from "react";
import DashboardLayout from "./layout/dashboard-layout";

function App() {
  const [login] = useState(true);
  return login ? (
    <DashboardLayout>
      <div>Hi im content</div>
    </DashboardLayout>
  ) : (
    <div>Not logged in!</div>
  );
}

export default App;
