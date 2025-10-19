import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./global/scenes/global/Topbar";
import Sidebar from "./global/scenes/global/Sidebar";
import Dashboard from "./global/scenes/dashboard";
import Team from "./global/scenes/team";
import Invoices from "./global/scenes/invoices";
import Contacts from "./global/scenes/contacts";
import Bar from "./global/scenes/bar/";
import Form from "./global/scenes/form";
import Line from "./global/scenes/line";
import Pie from "./global/scenes/pie";
import FAQ from "./global/scenes/faq";
import Geography from "./global/scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./global/scenes/calendar/";

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
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
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