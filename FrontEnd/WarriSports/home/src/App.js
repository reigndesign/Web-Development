import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./web/admin/global/Topbar";
import Sidebar from "./web/admin/global/Sidebar";
import Dashboard from "./web/admin/dashboard";
import Team from "./web/admin/users";
import Invoices from "./web/admin/invoices";
import Contacts from "./web/admin/contacts";
import Bar from "./web/admin/bar";
import Form from "./web/admin/form";
import Line from "./web/admin/line";
import Pie from "./web/admin/pie";
import FAQ from "./web/admin/faq";
import Geography from "./web/admin/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./web/admin/calendar";
import ErrorMessage from "./web/pages/errorPage";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route
                path="/"
                element={<Dashboard />}
                errorElement={<ErrorMessage />}
              />
              <Route path="/users" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
