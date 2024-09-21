import { RouterProvider } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { router } from "./router";
import { AppTheme } from "./theme";

function App() {
  return (
    <AppTheme>
      <RouterProvider router={router} />
    </AppTheme>
  );
}

export default App;
